import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        ]
    }
};


export default nextConfig;