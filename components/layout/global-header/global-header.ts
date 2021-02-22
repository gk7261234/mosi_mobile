import { Component, Vue } from 'vue-property-decorator'
import MenuTab from '@components/menu-tab/menu-tab.vue'

@Component({
  name: 'GlobalHeader',
  components: {
    MenuTab,
  },
})
export default class GlobalHeader extends Vue {
  private isShowMenu = false
  onSwitchMenu() {
    this.isShowMenu = !this.isShowMenu
  }
}
