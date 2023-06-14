/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "mobile-hero": "url(./images/mobile/image-hero.jpg)",
        "desktop-hero": "url(./images/desktop/image-hero.jpg)",
      },
      fontFamily: {
        sans: '"Alata", sans-serif',
        heading: "Josefin Sans, sans-serif",
      },
    },
    plugins: [],
  },
};
