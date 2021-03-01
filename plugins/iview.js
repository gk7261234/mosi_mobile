import Vue from 'vue'
import {
  Button,
  Layout,
  Menu,
  Submenu,
  MenuGroup,
  MenuItem,
  Icon,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Tooltip,
} from 'iview'

const components = {
  Button,
  Layout,
  'i-menu': Menu,
  Submenu,
  MenuGroup,
  MenuItem,
  Icon,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Tooltip,
}

const IviewModule = {
  ...components,
}

Object.keys(IviewModule).forEach((key) => {
  Vue.component(key, IviewModule[key])
})
