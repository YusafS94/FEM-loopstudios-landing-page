/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-hero": "url(./images/mobile/image-hero.jpg)",
        "desktop-hero": "url(./images/desktop/image-hero.jpg)",
      },
    },
  },
  plugins: [],
};
