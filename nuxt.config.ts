
export default ({
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/gilroy-bold' },
    ],
  },
    error: {
    statusCode: 404,
    message: 'error.vue',
  },
  layouts: {
    error: '@/src/components/error.vue',
  },
  generate: {
    fallback: true, 
  },
  plugins: [
    '~/src/plugins/font-awesome', 
  ],
  css: [
    '@/src/styles/global.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'vue-slider-component/theme/default.css'
  ],
  components: true,
  target: "static",
})
