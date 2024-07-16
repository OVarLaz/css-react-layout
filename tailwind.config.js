// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#343951",
        "base-gray": "#464C61",
        "line-gray": "#E0E7F1",
        "main-gray": "#F5F6FC",
        "primary-orange": "#FF9F00",
        "primary-blue": "#689FF8",
        "primary-green": "#4AC29D",
        "primary-gray": "#BCBECA",
        "primary-red": "#FF6860",
        "secondary-orange": "#FFB233",
        "secondary-gray": "#BEC0C8",
        "tertiary-gray": "#858A9D",
        "icon-gray": "#C4C4C4",
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        tiny: "0.5rem",
        xxs: "0.65rem",
      },
      backgroundImage: (theme) => ({
        "custom-gradient":
          "linear-gradient(to right, #FF9F00, #FF6860, #689EF8)",
      }),
    },
  },
  plugins: [],
};
