module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        smileyDesktop: "28.125rem",
        smileyMobile: "21.25rem",
      },
      height: {
        smileyDesktop: "28.125rem",
        smileyMobile: "21.25rem",
      },
    },
    fontFamily: {
      Inconsolata_Expanded: ["Inconsolata"],
      Inconsolata_Regular: ["Inconsolata"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#F4F4F4",
      green: "#00D27B",
      black: "#030609",
      white: " #FFFFFF",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
