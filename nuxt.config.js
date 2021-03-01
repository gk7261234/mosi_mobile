/* eslint-disable nuxt/no-cjs-in-config */
import { resolve } from 'path'
const TerserPlugin = require('terser-webpack-plugin')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '魔思科技',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['iview/dist/styles/iview.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/iview', ssr: true },
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      'assets/styles/reset.scss',
      'assets/styles/theme.scss',
      'assets/styles/modules.scss',
      'https://cdn.jsdelivr.net/npm.animate.css@3.5.1',
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    hardSource: true,
    extractCSS: true,
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            // 开启缓存
            cache: true,
            // 开启多进程打包
            parallel: true,
            // 启动source-map
            sourceMap: true,
            warnings: false,
            output: {
              comments: false,
            },
            compress: {
              // 删除无用的代码
              unused: true,
              // 删除debugger
              drop_debugger: true,
              // 移除console
              drop_console: true,
              // 移除无用的代码
              dead_code: true,
              pure_funcs: ['console.log'],
            },
          },
        }),
      ],
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extend(config, { isClient, loaders: { vue } }) {
      vue.transformAssetUrls.video = ['src', 'poster']
    },
    babel: {
      babelrc: true,
    },
    assetFilter(assetFilename) {
      return assetFilename.endsWith('.js')
    },
    transpile: [/^iview/],
  },
  alias: {
    '@pages': resolve(__dirname, './pages'),
    '@components': resolve(__dirname, './components'),
    '@core': resolve(__dirname, './core'),
    '@utils': resolve(__dirname, './utils'),
  },
  // server: {
  //   port: 8181,
  //   host: '0.0.0.0',
  // },
}
