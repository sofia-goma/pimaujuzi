/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      background: "#ffffff",
      foreground: "#020817",
      card: "#ffffff",
      cardForeground: "#020817",
      popover: "#ffffff",
      popoverForeground: "#020817",
      primary: "#2563eb",
      primaryForeground: "#f8fafc",
      secondary: "#f1f5f9 ",
      secondaryForeground: "#0f172a",
      muted: "#f1f5f9",
      mutedForeground: "#64748b",
      accent: "#f1f5f9",
      accentForeground: "#64748b",
      destructive: "#ef4444",
      destructiveForeground: "#f8fafc",
      border: "#e2e8f0",
      input: "#e2e8f0",
      ring: "#2563eb",
      radius: "0.5rem",
      chart1: "#e76e50",
      chart2: "#2a9d90",
      chart3: "#274754",
      chart4: "#e8c468",
      chart5: "#f4a462",
    },
    extend: {},
  },
  plugins: [],
};
