/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "14.4px"],
      sm: ["15px", "18px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.6px"],
      xl: ["20px", "24px"],
      "2xl": ["22px", "26.4px"],
      "3xl": ["28px", "33.6px"],
      "4xl": ["59px", "70.8px"],
    },

    extend: {
      fontFamily: {
        mcqueen: ["McQueenDisplay", "sans-serif"],
      },

      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(23.84% 23.84% at 50% 24.7%, #EEFEF1 0%, #ECF9FA 100%)",
        "custom-linear": "linear-gradient(90deg, #FF7A7A 0%, #FFD700 100%)", // Example of linear gradient
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
