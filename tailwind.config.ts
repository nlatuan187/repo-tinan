import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#CD7F32", // Gold
                    dark: "#B87333",
                },
                secondary: {
                    DEFAULT: "#1A1A1A", // Dark Charcoal
                    navy: "#0A192F",
                },
                background: {
                    light: "#FFFFFF",
                    cream: "#F9F9F9",
                },
            },
            fontFamily: {
                sans: ["var(--font-montserrat)", "sans-serif"],
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    "2xl": "1280px",
                },
            },
            keyframes: {
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "shine": {
                    "0%": { transform: "translateX(-150%) skewX(-15deg)" },
                    "100%": { transform: "translateX(150%) skewX(-15deg)" },
                },
            },
            animation: {
                "fade-in-up": "fade-in-up 0.8s ease-out forwards",
                "shine": "shine 1.5s infinite",
            },
        },
    },
    plugins: [],
};
export default config;
