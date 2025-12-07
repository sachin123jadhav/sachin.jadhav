/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "custom-anim-left": {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },

        borderColorAnimation: {
          "0%, 100%": { borderColor: "rgb(47, 180, 174)" },
          "25%": { borderColor: "rgb(37, 88, 171)" },
          "50%": { borderColor: "rgb(199, 31, 31)" },
          "75%": { borderColor: "rgb(255, 205, 0)" },
        },
      },

      animation: {
        "custom-anim-left":
          "custom-anim-left 1.3s forwards cubic-bezier(0.645, 0.045, 0.355, 1) 0.4s",

        borderColorAnimation: "borderColorAnimation 4s linear infinite",
      },

      colors: {
        pinkC: {
          50: "#ffe6f0",
          100: "#ffccd9",
          200: "#ff99b3",
          300: "#ff6699",
          400: "#ff3385",
          500: "#ff4b7e",
          600: "#e64373",
          700: "#b7365f",
          800: "#9b2d4d",
          900: "#6e1b33",
        },
        redC: {
          50: "#ffebef",
          100: "#ffccd0",
          200: "#ff99a2",
          300: "#ff6675",
          400: "#ff3347",
          500: "#ff4b7e",
          600: "#e04371",
          700: "#b7365d",
          800: "#9b2d4b",
          900: "#6e1b32",
        },
        yellow: {
          50: "#fff9e6",
          100: "#ffeb99",
          200: "#ffdb4d",
          300: "#ffcc00",
          400: "#e6b800",
          500: "#fcc760",
          600: "#e6b44d",
          700: "#cc9f3a",
          800: "#b38a28",
          900: "#8d6a1c",
        },
        orangeC: {
          50: "#fff0e6",
          100: "#ffcc99",
          200: "#ff9933",
          300: "#ff751f",
          400: "#ff5a14",
          500: "#ff7551",
          600: "#e66a4a",
          700: "#cc5e40",
          800: "#b34c36",
          900: "#8d3925",
        },
        skyblue: {
          50: "#e6f7ff",
          100: "#b3e0ff",
          200: "#80c9ff",
          300: "#4db2ff",
          400: "#1a9bff",
          500: "#00c8d8",
          600: "#00a3c1",
          700: "#008da3",
          800: "#007380",
          900: "#004d59",
        },
        purple: {
          50: "#f3e6ff",
          100: "#d1a6ff",
          200: "#b466ff",
          300: "#9b29d7",
          400: "#8a00bf",
          500: "#7709d7",
          600: "#6600c1",
          700: "#5500a3",
          800: "#440085",
          900: "#33006a",
        },
      },
    },
  },

  plugins: [],

  safelist: [
    "list-none",
    "space-y-4",
    "pl-6",
    "flex",
    "items-start",
    "hidden",
    "bg-pink-500",
    "border-l-pink-500",
  ],
};
