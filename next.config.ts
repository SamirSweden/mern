import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: "/_next/static/:path*",
                destination: "https://crypto-app-xi-roan-97.vercel.app/_next/static/:path*",
            },
            {
                source: "/_next/image/:path*",
                destination: "https://crypto-app-xi-roan-97.vercel.app/_next/image/:path*",
            },
            {
                source: "/:path*.(js|css|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|eot)",
                destination: "https://crypto-app-xi-roan-97.vercel.app/:path*.(js|css|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|eot)",
                has: [
                    {
                        type: "header",
                        key: "referer",
                        value: ".*/start.*",
                    },
                ],
            },
            {
                source: "/start/:path*",
                destination: "https://crypto-app-xi-roan-97.vercel.app/:path*",
            },
            {
                source: "/start",
                destination: "https://crypto-app-xi-roan-97.vercel.app",
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