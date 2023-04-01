/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borderColor:'#858C94',
        fadeDanger: '#FEEFEF',
        fadeSuccess: '#EDF9F0',
        primary : '#018748',
        success: '#00BE65',
        danger: '#DA1414',
        secondary : '#FC6E1F',
        warning : '#D96C19',
        fadeWarning : '#FCF1E8',
        fadeSecondary : '#FCF1E8',
        tableColor : '#272833',
        //grey: '#394452',
        grey: {
            '50': '#6D7580',
            '80': '#1C1F23',
            '70': '#394452',
            '90': '#C2CBD6'
        },
        darkGreen: '#2B8741'
    },

    },
  },
  plugins: [],
}

