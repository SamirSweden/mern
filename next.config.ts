import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: "/_next/static/:path*",
                destination: "https://crypto-app-xi-roan-97.vercel.app/_next/static/:path*",
            },
            {
                source: "/_next/static/:path*/:file",
                destination: "https://crypto-app-xi-roan-97.vercel.app/_next/static/:path*/:file",
            },
            {
                source: "/_next/image/:path*",
                destination: "https://crypto-app-xi-roan-97.vercel.app/_next/image/:path*",
            },
            {
                source: "/:file+(css|js|json|map|png|jpg|jpeg|svg|ico|webp|woff|woff2|ttf)",
                destination: "https://crypto-app-xi-roan-97.vercel.app/:file",
            },
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
            },
            {
                protocol:"https",
                hostname:"upload.wikimedia.org"
            },
            {
                protocol: "https",
                hostname: "coin-images.coingecko.com"
            },
            {
                protocol: "https",
                hostname:"assets.kraken.com"
            },
            {
                protocol: "https",
                hostname:"image.coinpedia.org",
            },
            {
                protocol:"https",
                hostname:"encrypted-tbn0.gstatic.com"
            }
        ]
    },
};


export default nextConfig;