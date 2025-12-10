import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Satoshi', 'sans-serif'],
            },
            colors: {
                thinkRed: '#FF0000',
                thinkBlack: '#000000',
                thinkWhite: '#FFFFFF',
                thinkDarkGray: '#1A1A1A', // Matte black feel
            }
        },
    },
    plugins: [],
};
export default config;
