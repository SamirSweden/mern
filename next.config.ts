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

        ]
    }
};


export default nextConfig;