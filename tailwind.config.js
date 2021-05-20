module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    "0%, 10%": {
                        transform: "rotate(-10deg)",
                    },
                    "5%, 15%": {
                        transform: "rotate(10deg)",
                    },
                    "20%": { transform: "rotate(0deg)" },
                },
            },
            animation: {
                wiggle: "wiggle 3s ease-in-out infinite",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
