const config = require('./config.json');
const themes = require('./themes.json');

const selectedTheme = themes[config.theme] || themes.default;

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...selectedTheme,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
