/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable nuxt/no-cjs-in-config */
import { resolve } from 'path'
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const app = require('./package.json')
export default {
  version: app.name,
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
  modules: ['@nuxtjs/style-resources', 'nuxt-ssr-cache'],
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
    // analyze: true,
    // hardSource: true,
    extractCSS: true,
    transpile: [/^iview/],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extend(config, { isClient, loaders: { vue } }) {
      vue.transformAssetUrls.video = ['src', 'poster']
    },
    optimization: {
      minimize: true,
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
        cacheGroups: {
          default: {
            name: 'common',
            chunks: 'initial',
            minChunks: 2, // 模块被引用2次以上的才抽离
            priority: -20,
          },
          vendors: {
            // 拆分第三方库（通过npm|yarn安装的库）
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'initial',
            priority: -10,
          },
        },
      },
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            cache: true,
            parallel: true,
            sourceMap: true,
            warnings: false,
            output: {
              comments: false,
            },
            compress: {
              unused: true,
              drop_debugger: true,
              drop_console: true,
              dead_code: true,
              pure_funcs: ['console.log'],
            },
          },
        }),
        new OptimizeCSSAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
          canPrint: true,
        }),
      ],
    },
    babel: {
      babelrc: true,
    },
    assetFilter(assetFilename) {
      return assetFilename.endsWith('.js')
    },
  },
  cache: {
    useHostPrefix: false, // 是否使用主机前缀 如果提供了多个主机名 可以设置为true
    pages: [
      // 将要缓存的页面
      // 使用正则匹配首页
      /^\/$/,
    ],
    store: {
      // store 有其他type存储的方式 具体可查看 https://github.com/arash16/nuxt-ssr-cache#readme
      type: 'memory',
      // 缓存的最大的页面
      max: 100,
      // 缓存的时间 到期将过期
      ttl: 60 * 60 * 24 * 7,
    },
  },
  alias: {
    '@pages': resolve(__dirname, './pages'),
    '@components': resolve(__dirname, './components'),
    '@core': resolve(__dirname, './core'),
    '@utils': resolve(__dirname, './utils'),
  },
  server: {
    port: 8183,
    host: '0.0.0.0',
  },
}
