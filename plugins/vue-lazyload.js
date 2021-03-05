import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  // error:'error.jpg', // 加载错误的图片
  loading: require('~@/assets/images/loading.svg'),
})
