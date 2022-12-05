module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  safelist: [
    {
      pattern:
        /(bg|border|text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#30BE75',
        secondary: '#889AB0',
        tertiary: '#F8BD26',
        green: '#339964',
        lightGreen: '#dcf6eb',
        lightYellow: '#fef7e8',
        yellow: '#f8bf25',
        maroon: '#CE235D',
      },
      fontFamily: {},
    },
  },
  variants: {},
  plugins: [],
};
