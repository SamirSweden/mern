import { NextRequest, NextResponse } from "next/server";
import { rewriteHtml } from "../lib/proxy-lib";

const HOP_BY_HOP = new Set([
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailers",
  "transfer-encoding",
  "upgrade",
  "host",
]);

export async function GET(req: NextRequest) {
  return handleProxy(req);
}

export async function POST(req: NextRequest) {
  return handleProxy(req);
}

export async function handleProxy(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl)
    return NextResponse.json({ error: "url param required" }, { status: 400 });

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(targetUrl);
    const proto = parsedUrl.protocol.trim().toLowerCase();
    if (proto !== "http:" && proto !== "https:") {
      return NextResponse.json({ error: "only https/http", got: proto }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid URL", raw: targetUrl }, { status: 400 });
  }

  const forwardHeaders = new Headers();
  req.headers.forEach((value, key) => {
    if (!HOP_BY_HOP.has(key.toLowerCase())) {
      forwardHeaders.set(key, value);
    }
  });
  forwardHeaders.set("host", parsedUrl.host);
  forwardHeaders.delete("referer");
  forwardHeaders.delete("origin");
  forwardHeaders.delete("accept-encoding");

  try {
    const upstream = await fetch(parsedUrl.toString(), {
      method: req.method,
      headers: forwardHeaders,
      body: req.method !== "GET" && req.method !== "HEAD" ? req.body : undefined,
      redirect: "follow",
    });

    const contentType = upstream.headers.get("content-type") ?? "";
    
    const buffer = await upstream.arrayBuffer();
    console.log("Response size:", buffer.byteLength, "Content-Type:", contentType);

    let body: BodyInit;
    if (contentType.includes("text/html")) {
      const html = new TextDecoder("utf-8").decode(buffer);
      console.log("HTML length:", html.length);
      console.log("HTML preview:", html.slice(0, 300));
      body = rewriteHtml(html, parsedUrl);
    } else {
      body = buffer;
    }

    const responseHeaders = new Headers();
    upstream.headers.forEach((value, key) => {
      if (!HOP_BY_HOP.has(key.toLowerCase())) {
        responseHeaders.set(key, value);
      }
    });

    responseHeaders.delete("content-security-policy");
    responseHeaders.delete("content-security-policy-report-only");
    responseHeaders.delete("x-frame-options");
    responseHeaders.delete("x-content-type-options");
    responseHeaders.delete("content-encoding"); 
    responseHeaders.set("access-control-allow-origin", "*");

    return new NextResponse(body, {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "fetch failed", detail: err instanceof Error ? err.message : String(err) },
      { status: 502 }
    );
  }
}