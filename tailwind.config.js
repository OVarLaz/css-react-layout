// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#343951",
        "base-gray": "#464C61",
        "line-gray": "#E0E7F1",
        "main-gray": "#F5F6FC",
        "primary-orange": "#FF9F00",
        "primary-blue": "#689FF8",
        "primary-green": "#4AC29D",
        "primary-gray": "#BCBECA",
        "secondary-orange": "#FFB233",
        "secondary-gray": "#BEC0C8",
        "tertiary-gray": "#858A9D",
        "icon-gray": "#C4C4C4",
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
