import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  // target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // titleTemplate: 'Kinkini Roy - Art Emporium and Gallery',
    // title: 'Kinkini Roy - Art Emporium and Gallery',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: 'Kinkini Roy - Art Emporium and Gallery' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/kinkiniroylogo.png' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-seo'
  ],
  seo: {
    // Module options
    name: 'Kinkini Roy - Art Emporium and Gallery',
    title: 'Kinkini Roy - Art Emporium and Gallery',
    templateTitle: 'Kinkini Roy - Art Emporium and Gallery',
    description: 'Kinkini Roy - Art Emporium and Gallery',
    keywords: ['kinkini roy', 'art gallery', 'art emporium'],
    image: '/kinkiniroylogo.png',
    openGraph: { type: 'website', title: 'Kinkini Roy - Art Emporium and Gallery', description: 'Kinkini Roy - Art Emporium and Gallery' }
    //...
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://kinkiniroy.com:1337'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
