import {
  situationAnalysisList,
  applyValueList,
  solutionBreadcrumbs,
} from '@core/base-modules/constans/solutionGeneral'
import { Component, Vue } from 'vue-property-decorator'
import BreadcrumbComponent from '@components/breadcrumb-component/breadcrumb-component.vue'
@Component({
  name: 'DigitalOneStopService',
  components: {
    BreadcrumbComponent,
  },
})
export default class DigitalOneStopService extends Vue {
  private solutionBreadcrumbs = solutionBreadcrumbs
  private situationAnalysisList = situationAnalysisList
  private applyValueList = applyValueList
  private created() {
    const now = {
      key: 'degital-general',
      title: '数据生命周期一站式服务',
    }
    this.solutionBreadcrumbs.findIndex(
      (_item: { key: string }) => _item.key === now.key
    ) < 0 && this.solutionBreadcrumbs.push(now)
  }
}
