const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [
      './resources/assets/ts/**/*.tsx'
    ],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
      whitelistPatterns: [/-active$/, /-enter$/, /-leave-to$/, /show$/],
    },
  },
  theme: {
    extend: {
        colors: {
            brand: {
            primary: "#FFDA80",
            facebook: "#435F9B",
            twitter: "#55ACEE",
            linkedin: "#007BB5",
            github: "#333",
            laravel: "#FF2D20",
            design: "#FFD039",
            javascript: "#F7DF1E",
            typescript: "#007ACC",
            react: "#53C1DE",
            vue: "#41B883",
            php: "#777BB3",
            feedback: "#c0916f",
            docker: "#1D91B4"
            },
        }
    }
  }
}
