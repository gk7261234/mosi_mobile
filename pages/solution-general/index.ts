import { Component, Emit, Vue } from 'vue-property-decorator'
import {
  leftMenu,
  solutionAchor,
  solutionBreadcrumbs,
} from '@core/base-modules/constans/solutionGeneral'
import { SloutCaseList } from '@core/base-modules/constans/soluteCase'
import AnchorComponent from '@components/anchor-component/anchor-component.vue'
import BreadcrumbComponent from '@components/breadcrumb-component/breadcrumb-component.vue'
import LeftMenu from '@components/left-menu/left-menu.vue'
import DigitalService from '../digital-one-stop-service/index.vue'
@Component({
  name: 'SolutionGeneral',
  components: {
    AnchorComponent,
    BreadcrumbComponent,
    LeftMenu,
    DigitalService,
  },
})
export default class SolutionGeneral extends Vue {
  private solutionAchor = solutionAchor
  private sloutCaseList = SloutCaseList
  private solutionBreadcrumbs = solutionBreadcrumbs
  private leftMenu = leftMenu
  private openNames: string[] = []
  @Emit()
  // _name: string
  private updateComponent() {
    // console.log(_name);
    // 渲染組件，對應組件名
  }

  @Emit()
  private updateOpenNames(_names: string[]) {
    this.openNames = _names
  }

  get activeName() {
    return this.leftMenu.length
      ? this.leftMenu[0].children.length
        ? this.leftMenu[0].children[0].name
        : ''
      : ''
  }

  private created() {
    this.openNames = this.leftMenu.length ? [this.leftMenu[0].name] : []
  }
}
