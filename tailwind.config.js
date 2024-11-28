import defaulTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                workSans: ["Work Sans", ...defaulTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
