/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "540px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        feedbackBg: "url('/images/feedback_bg.svg')",
        signupBg: "url('/images/signup_bg.svg')",
      },
      fontFamily: {
        futuraMd: ["FuturaMd"],
        futuraBk: ["FuturaBk"],
        roboto: ["Roboto"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
