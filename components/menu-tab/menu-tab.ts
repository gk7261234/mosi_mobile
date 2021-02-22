import { Component, Vue } from 'vue-property-decorator'
import { MenuJson } from '@core/base-modules/constans/menu/index.ts'
import ChildMenu from './childMenu/childMenu.vue'
@Component({
  name: 'MenuTab',
  components: {
    ChildMenu,
  },
})
export default class MenuTab extends Vue {
  private MenuJson: any = []
  created() {
    this.MenuJson = MenuJson
  }
}
