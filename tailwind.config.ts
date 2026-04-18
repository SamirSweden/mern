import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                shine: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '200% 50%' },
                },
                gradient: {
                    "0%": { backgroundPosition: "0% 0%" },
                    "50%": { backgroundPosition: "100% 100%" },
                    "100%": { backgroundPosition: "0% 0%" }
                }
            },
            animation :{
                'shine': 'shine 3s linear infinite',
            }
        },
    },
    plugins: [],
};

export default config;
