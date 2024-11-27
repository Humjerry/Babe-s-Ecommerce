/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      branded: "#e74040",
      brandred: " #23a6f0",
      brandyellow: "#ffc938",
      lightgray: "#fafafa",
      darkblue: "#252b42",
      emerald: "#23856d",
      white: "#ffffff",
    },
    extend: {
      textColor: ["visited"],
      backgroundColor: ["active", "disabled", "checked"],
      borderColor: ["active", "disabled", "checked", "focused"],
      backgroundImage: {
        firstshow: "url(./src/assets/images/pizza.jpg)",
      },
    },
  },
  plugins: [],
};
