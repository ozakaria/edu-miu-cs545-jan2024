/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // 'bg-image': "url('https://static.rdc.moveaws.com/images/hero/default/2021-11/webp/hp-hero-desktop-xl.webp')"
        "bg-image":
          "url('https://images.adsttc.com/media/images/55dd/0e51/e58e/ce6d/4100/00b3/slideshow/17.jpg?1440550467')",
      },
      height: {
        "90v": "75vh",
      },
    },
  },
  plugins: [],
};
