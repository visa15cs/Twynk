/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        surface: "#0b1020",
        card: "#0f1724",
        accent: "#1d9bf0",
        muted: "#94a3b8",
        border: "#111827",
      },
      borderRadius: { xl2: "1rem" },
    },
  },
  plugins: [],
};
