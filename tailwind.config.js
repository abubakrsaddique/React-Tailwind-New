/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      secondary: "#3a0ca3",
      primary: "white",
      black: "black",
      red: "red",
      gray: "#808080",
    },
    screens: {
      lg: { max: "1024px" },
      tab: { max: "991px" },
      mob: { max: "768px" },
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(76, 201, 240, 0), rgba(67, 97, 238, 0.3))",
      },
      plugins: [],
    },
  },
};
