import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
    return [
      {
        source: "/start",
        destination: "https://crypto-app-xi-roan-97.vercel.app",
      },
      {
        source: "/start/:path*",
        destination: "https://crypto-app-xi-roan-97.vercel.app/:path*",
      },
    ];
  },

    
    images: {
        remotePatterns: [
            {
              protocol:"https",
              hostname:"assets-cms.kraken.com",
            },
            {
                protocol:"https",
                hostname:"companieslogo.com",
            },
            {
                protocol:"https",
                hostname:"h8dxkfmaphn8o0p3.public.blob.vercel-storage.com",
            },
            {
                protocol:"https",
                hostname:"nextjs.org",
            },
            {
                protocol: "https",
                hostname:"devio2023-media.developers.io",
            }
        ]
    },

};


export default nextConfig;