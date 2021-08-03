module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        smileyMobile: "25rem",
      },
    },
    fontFamily: {
      Inconsolata: ["Inconsolata", "monospace"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#F4F4F4",
      green: "#00D27B",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
