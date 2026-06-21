/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        surface: "#0E0E0F",
        elevated: "#161618",
        line: "rgba(255,255,255,0.08)",
        lineStrong: "rgba(255,255,255,0.2)",
        ash: "#8a8a8e",
        bone: "#ededed",
        signal: "#FF3B30",
        signalDeep: "#E11D2E",
        signalSoft: "#FF6A5A",
      },
      fontFamily: {
        display: ['"Clash Display"', "sans-serif"],
        sans: ['"Satoshi"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      letterSpacing: {
        overline: "0.28em",
      },
      maxWidth: {
        shell: "1400px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
        equalize: {
          "0%,100%": { height: "30%" },
          "50%": { height: "100%" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        marqueeFast: "marquee 18s linear infinite",
        floaty: "floaty 5s ease-in-out infinite",
        pulseDot: "pulseDot 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
