import { Component, Vue, Prop } from 'vue-property-decorator'
import * as MenuDto from '@core/base-modules/domain/menu-domian/entity/MenuInfoDto'
import { SlouteSubMenu } from '@core/base-modules/constans/soluteCase'
import SystemSubmenu from './big-data-platform/big-data-platform.vue'
@Component({
  name: 'MenuTab',
  components: {
    SystemSubmenu,
  },
})
export default class MenuTab extends Vue {
  private SlouteSubMenu = SlouteSubMenu
  @Prop()
  private MenuInfo!: MenuDto.MenuModal

  @Prop()
  private ActiveName!: string

  private toPage(_route: string) {
    // let currentPath = this.$route
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
