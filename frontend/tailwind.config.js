/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#111111",
        primaryHover: "#000000",
        accent: "#1e293b",
        accentHover: "#0f172a",
        surface: "#ffffff",
        surfaceSoft: "#f8fafc",
        borderSoft: "#e2e8f0",
        textPrimary: "#0f172a",
        textMuted: "#64748b",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.06)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.08)",
        heavy: "0 20px 60px rgba(0, 0, 0, 0.12)",
      },

      fontFamily: {
        sans: ['"Amaranth"', "sans-serif"],
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};