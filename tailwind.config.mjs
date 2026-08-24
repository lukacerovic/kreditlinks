/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--bg)",
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface-2)",
          3: "var(--surface-3)",
        },
        tx: {
          1: "var(--text-1)",
          2: "var(--text-2)",
          3: "var(--text-3)",
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
        },
        accent: "var(--accent)",
        ink: {
          950: "#070707",
          900: "#0c0c0d",
          800: "#121214",
          700: "#1a1a1d",
          600: "#222226",
          500: "#2c2c31",
        },
        gold: {
          50: "#fff7e2",
          100: "#f6e4b6",
          200: "#ecd28b",
          300: "#e2c068",
          400: "#d4a557",
          500: "#b88636",
          600: "#8c6322",
        },
      },
      fontFamily: {
        display: ["Satoshi", "Satoshi-Light", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 40px -8px rgba(212, 165, 87, 0.45)",
        "card": "0 12px 40px -12px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(212,165,87,0.16), transparent 65%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(212,165,87,0.08), transparent 70%)",
        "card-grad":
          "linear-gradient(160deg, rgba(212,165,87,0.06) 0%, rgba(255,255,255,0.01) 40%, rgba(0,0,0,0) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
