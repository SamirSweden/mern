const PROXY_BASE = "/api/proxy?url=";

export function rewriteHtml(html: string, baseUrl: URL): string {
  return html
    .replace(/<base[^>]*>/gi, "")
    .replace(
      /(href|src|action)=(["'])(https?:\/\/[^"']+)\2/gi,
      (_, attr, quote, url) =>
        `${attr}=${quote}${PROXY_BASE}${encodeURIComponent(url)}${quote}`
    )
    .replace(
      /(href|src|action)=(["'])(\/\/[^"']+)\2/gi,
      (_, attr, quote, url) =>
        `${attr}=${quote}${PROXY_BASE}${encodeURIComponent("https:" + url)}${quote}`
    )
    .replace(
      /(href|src|action)=(["'])(\/[^"']*)\2/gi,
      (_, attr, quote, path) =>
        `${attr}=${quote}${PROXY_BASE}${encodeURIComponent(baseUrl.origin + path)}${quote}`
    )
    .replace(
      /(href|src|action)=(["'])(?!https?:\/\/)(?!\/\/)(?!\/)([\w][^"']*)\2/gi,
      (_, attr, quote, path) =>
        `${attr}=${quote}${PROXY_BASE}${encodeURIComponent(baseUrl.origin + "/" + path)}${quote}`
    )
    .replace(/srcset=(["'])([^"']+)\1/gi, (_, quote, srcset) => {
      const rewritten = srcset.replace(
        /(https?:\/\/[^\s,]+)/gi,
        (url: string) => `${PROXY_BASE}${encodeURIComponent(url)}`
      );
      return `srcset=${quote}${rewritten}${quote}`;
    })
    .replace(
      /url\((["']?)(https?:\/\/[^)"']+)\1\)/gi,
      (_, quote, url) =>
        `url(${quote}${PROXY_BASE}${encodeURIComponent(url)}${quote})`
    )
    .replace(/<\/head>/i, `${injectInterceptor(baseUrl)}</head>`);
}

function injectInterceptor(baseUrl: URL): string {
  return `<script>
(function() {
  const PROXY = "${PROXY_BASE}";
  const BASE = "${baseUrl.origin}";

  function proxyUrl(url) {
    if (!url) return url;
    if (
      url.startsWith("data:") ||
      url.startsWith("blob:") ||
      url.startsWith("#") ||
      url.startsWith("javascript:") ||
      url.startsWith("mailto:")
    ) return url;

    if (url.startsWith("//")) {
      return PROXY + encodeURIComponent("https:" + url);
    }
    if (url.startsWith("https://") || url.startsWith("http://")) {
      if (url.includes(location.host)) return url;
      return PROXY + encodeURIComponent(url);
    }
    if (url.startsWith("/")) {
      return PROXY + encodeURIComponent(BASE + url);
    }
    return PROXY + encodeURIComponent(BASE + "/" + url);
  }

  const origFetch = window.fetch;
  window.fetch = function(input, init) {
    try {
      const url = typeof input === "string" ? input : input.url;
      const proxied = proxyUrl(url);
      return origFetch(proxied, init);
    } catch(e) {
      return origFetch(input, init);
    }
  };

  const origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, ...args) {
    try { url = proxyUrl(String(url)); } catch(e) {}
    return origOpen.call(this, method, url, ...args);
  };

  const origCreateElement = document.createElement.bind(document);
  document.createElement = function(tag, ...args) {
    const el = origCreateElement(tag, ...args);
    const tagLower = tag.toLowerCase();
    if (tagLower === "script" || tagLower === "img" || tagLower === "link" || tagLower === "iframe") {
      const origSetAttr = el.setAttribute.bind(el);
      el.setAttribute = function(name, value) {
        if ((name === "src" || name === "href") && value) {
          value = proxyUrl(value);
        }
        return origSetAttr(name, value);
      };
      const makeProp = (prop) => {
        Object.defineProperty(el, prop, {
          set(value) { origSetAttr(prop, proxyUrl(value)); },
          get() { return el.getAttribute(prop) || ""; },
          configurable: true,
        });
      };
      makeProp("src");
      makeProp("href");
    }
    return el;
  };

  // перехват worker и importScripts
  const origWorker = window.Worker;
  if (origWorker) {
    window.Worker = function(url, opts) {
      return new origWorker(proxyUrl(url), opts);
    };
  }

  // history pushState — обновляем адресную строку родителя
  const origPushState = history.pushState.bind(history);
  history.pushState = function(state, title, url) {
    if (url) {
      try {
        const abs = new URL(String(url), BASE).href;
        window.parent.postMessage({ type: "navigate", url: abs }, "*");
      } catch(e) {}
    }
    return origPushState(state, title, url);
  };
})();
</script>`;
}