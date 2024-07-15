// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#343951",
        "base-gray": "#464C61",
        "main-gray": "#F5F6FC",
        "primary-orange": "#FF9F00",
        "secondary-orange": "#FFB233",
        "secondary-gray": "#BEC0C8",
      },
      backgroundImage: (theme) => ({
        "custom-gradient":
          "linear-gradient(to right, #FF9F00, #FF6860, #689EF8)",
      }),
    },
  },
  plugins: [],
};
