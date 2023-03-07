/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        whiteColor: "#efefef",
        greyColor: "#86858573",
        darkGreyColor: "#5c5c5c",
        textGrey: "#555",
        blueColor: "#007cbc",
        lightBlue: "#298fc4",
      },
    },
    fontFamily: {
      body: ['"montserrat"', '"sans-serif"'],
      great: ['"Great Vibes"', '"sans-serif"'],
    },
  },
  plugins: [],
};
