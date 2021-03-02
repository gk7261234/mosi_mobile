import { Component, Vue, Watch } from 'vue-property-decorator'
import { MenuSiderListCn } from '@core/base-modules/constans/menu'
import { SlouteSubMenu } from '@core/base-modules/constans/soluteCase'
import { Route } from 'vue-router'
import SystemSubmenu from './big-data-platform/big-data-platform.vue'
@Component({
  name: 'MenuTab',
  components: {
    SystemSubmenu,
  },
})
export default class MenuTab extends Vue {
  private ActiveName = ''
  @Watch('$route', { immediate: true })
  WatchRoute(_route: Route) {
    if (_route.name) {
      this.ActiveName = _route.name
    }
  }

  private SlouteSubMenu = SlouteSubMenu
  private MenuInfo = MenuSiderListCn

  private toPage(_route: string) {
    _route &&
      this.$router.push({
        path: _route,
      })
  }

  private hoverCase(_index: number) {
    this.SlouteSubMenu[_index].active = true
  }

  private leaveCase(_index: number) {
    this.SlouteSubMenu[_index].active = false
  }
}
