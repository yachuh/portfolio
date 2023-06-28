module.exports = {
  content: ['./app/**/*.{html,ejs}'],
  theme: {
    container: {
      center: true,
      padding: '.75rem'
    },
    fontSize: {
      xs: ['12px', '14px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      md: ['18px', '26px'],
      lg: ['20px', '29px'],
      xl: ['22px', '32px'],
      '2xl': ['24px', '35px'],
      '3xl': ['28px', '40px'],
      '4xl': ['32px', '37px'],
      '5xl': ['48px', '70px']
    },
    extend: {
      fontFamily: {
        azeret: ['"Azeret Mono"']
      },
      colors: {
        transparent: 'transparent',
        primary: '#3CC47C', // "#62DB54", // 綠色
        secondary: '#09ACF5', // 藍色
        dark: {
          primary: '#1C1C1C', // 黑色, 主要背景
          secondary: '#2D2D2D', // 深灰色, 次要背景
          text: '#3CC47C', // "#494755", // 深灰色, 文字
          border: '#C1C1C1' // 淺灰色, border
        },
        black: '#000000'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}
