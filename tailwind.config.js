/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            boxShadow: {
                card: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            },

            colors: {
                bgBlack: {
                    50: "#E8E8E8",
                    100: "#D1D1D1",
                    200: "#A6A6A6",
                    300: "#787878",
                    400: "#4A4A4A",
                    500: "#1E1E1E",
                    600: "#171717",
                    700: "#121212",
                    800: "#0D0D0D",
                    900: "#050505",
                    950: "#030303",
                },
            },

            keyframes: {
                primaryLeft: {
                    from: {
                        left: "0%",
                    },
                    to: {
                        left: "-100%",
                    },
                },
                secondaryLeft: {
                    from: {
                        left: "100%",
                    },
                    to: {
                        left: "0%",
                    },
                },

                primaryRight: {
                    from: {
                        right: "0%",
                    },
                    to: {
                        right: "-100%",
                    },
                },
                secondaryRight: {
                    from: {
                        right: "100%",
                    },
                    to: {
                        right: "0%",
                    },
                },
            },

            animation: {
                "auto-scroll-left-primary": "primaryLeft 8s linear infinite",
                "auto-scroll-left-secondary":
                    "secondaryLeft 8s linear infinite",

                "auto-scroll-right-primary": "primaryRight 8s linear infinite",
                "auto-scroll-right-secondary":
                    "secondaryRight 8s linear infinite",
            },
        },
    },
    plugins: [],
};
