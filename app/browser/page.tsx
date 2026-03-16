"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Search } from "lucide-react";


export default function BrowserPage() {
  const [inputUrl, setInputUrl] = useState("https://example.com");
  const [proxyUrl, setProxyUrl] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  function navigate() {
    let url = inputUrl.trim();
    if (!url.startsWith("http")) url = "https://" + url;
    setProxyUrl(`/api/proxy?url=${encodeURIComponent(url)}`);
  }

  function goHome() {
    setInputUrl("https://example.com");
    navigate();
  }

  return (
    <div className="browser">
      <div className="toolbar">
        <div className="logo">
          <Link
            href="/"
            className="flex items-center gap-4 text-white text-xs sm:text-lg capitalize cursor-pointer outline-none border-none"
          >
             Mern <span className="text-xs cursor-default     lowercase bg-[#800BF5] py-1 px-1.5 rounded-full">browser</span>
          </Link>
        </div>

        <div className="search">
          <input
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && navigate()}
            placeholder="Введи URL..."
          />
          <button onClick={navigate}>
            <Search size={20} />
          </button>
        </div>
      </div>

      <div className="frameWrapper">
        {proxyUrl ? (
          <iframe
            ref={iframeRef}
            src={proxyUrl}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        ) : (
          <div className="placeholder">
            Новый браузер Mern
          </div>
        )}
      </div>

      <style jsx>{`
        .browser {
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #000;
          font-family: system-ui;
          overflow: hidden;
        }

        .toolbar {
          position: sticky;
          top: 16px;
          margin: 0 10px;
          z-index: 10;

          display: flex;
          align-items: center;
          gap: 20px;
          padding: 12px 20px;

          background: linear-gradient(
            135deg,
            rgba(0, 30, 0, 0.7),
            rgba(0, 60, 0, 0.5)
          );
          backdrop-filter: blur(20px);

          border-radius: 24px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(0, 255, 0, 0.2); 
          transition: all 0.3s ease;
          flex-wrap:wrap;
        }

        .logo a {
         font-size: clamp(12px, 5vw, 18px);
          color: white;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 0.5px;
        }

        .search {
          flex: 1 1 100%;
          display: flex;
          gap: 10px;
        }

        input {
          flex: 1;
          padding: 10px 14px;
          border-radius: 16px;
          border: none;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          outline: none;
          transition: all 0.3s ease;
          min-width:180px;
        }

        input::placeholder {
          color: #cbd5e1;
        }

        input:focus {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 0 2px #3b82f6;
        }

        button {
          padding: 10px 16px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.5);
        }

        .home__btn {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .home__btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .frameWrapper {
          flex: 1;
          padding: 16px;
        }

        iframe {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 16px;
          background: white;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .placeholder {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
