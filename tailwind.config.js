

module.exports = {
  
  purge: {
    //include only used classes
    //after build
    enabled: false,
    content: ["./pages/**/*.js"]
  },
  darkMode: false, // can be 'media' or 'class'
  // Customizations specific to this project would go here
  theme: {
    extend: {
        colors: {
            blue: {
              light: '#85d7ff',
              DEFAULT: '#1fb6ff',
              dark: '#009eeb',
            },
    }
  },
},

  variants: {
    extend: {
      //   borderColor: ['focus-visible'],
      //   opacity: ['disabled'],
    }
  },
  variants: {},
  plugins: []
};
