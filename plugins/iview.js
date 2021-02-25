import Vue from 'vue'
// import iView from 'iview'
import {
  Layout,
  Menu,
  Submenu,
  MenuGroup,
  MenuItem,
  Icon,
  Row,
  Col,
} from 'iview'
// import locale from 'iview/dist/locale/en-US' // Change locale, check node_modules/iview/dist/locale

const components = {
  Layout,
  'i-menu': Menu,
  Submenu,
  MenuGroup,
  MenuItem,
  Icon,
  Row,
  Col,
}

const IviewModule = {
  ...components,
}

Object.keys(IviewModule).forEach((key) => {
  Vue.component(key, IviewModule[key])
})

// Vue.use(iView)
