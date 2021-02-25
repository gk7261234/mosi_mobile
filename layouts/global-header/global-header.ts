import { Component, Vue, Watch } from 'vue-property-decorator'
import MenuTab from '@components/menu-tab/menu-tab.vue'
import * as MenuInfoDto from '@core/base-modules/domain/menu-domian/entity/MenuInfoDto'
import { MenuSiderListCn } from '@core/base-modules/constans/menu'
import { Route } from 'vue-router'

@Component({
  name: 'GlobalHeader',
  components: {
    MenuTab,
  },
})
export default class GlobalHeader extends Vue {
  private Menu: MenuInfoDto.MenuModal = new MenuInfoDto.MenuModal(
    MenuSiderListCn.MenuExtra
  )

  private ActiveName = ''
  @Watch('$route', { immediate: true })
  WatchRoute(_route: Route) {
    if (_route.name) {
      this.ActiveName = _route.name
    }
  }

  private created() {
    this.Menu.MenuItemList = MenuSiderListCn.MenuItemList
  }

  jumpToHome() {
    if (this.$route.name !== 'homepage') {
      this.$router.push({
        path: '/homepage',
      })
    }
  }
}
