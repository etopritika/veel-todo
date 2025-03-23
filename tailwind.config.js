/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",

        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        danger: "var(--color-danger)",

        input: {
          border: "var(--color-input-border)",
          background: "var(--color-input-background)",
          focus: "var(--color-input-focus)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
