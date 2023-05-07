/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBG: "#B5B5B5",
        darkBG: "#161616",
        lightText: "#212020",
        darkText: "#B5B5B5",
        lightBeforeHover: "#525151",
        darkBeforeHover: "#898888",
      },
    },
  },
  plugins: [],
};
