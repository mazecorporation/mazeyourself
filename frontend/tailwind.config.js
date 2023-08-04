/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        productSans: ["Product Sans", "sans-serif"],
        productSansBold: ["Product Sans Bold", "sans-serif"],
        productSansItalic: ["Product Sans Italic", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"]
      },
      backgroundImage: {
        "hero-pattern": "url('assets/images/mask-group.png')"
      }
    }
  },
  plugins: []
};
