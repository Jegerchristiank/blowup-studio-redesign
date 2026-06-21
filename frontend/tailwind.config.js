/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        surface: "#121214",
        elevated: "#1A1A1D",
        line: "rgba(255,255,255,0.09)",
        lineStrong: "rgba(255,255,255,0.22)",
        ash: "#9A9AA0",
        bone: "#F4F4F4",
        brand: "#FFD834",
        brandDark: "#E6BE00",
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1280px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.6)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        pulseDot: "pulseDot 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
