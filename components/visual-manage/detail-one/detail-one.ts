import { Component, Vue } from 'vue-property-decorator'
import {
  detailOneBreadcrumbs,
  detailOneBuild,
} from '@core/base-modules/constans/successStories/detail'
import BreadcrumbComponent from '@components/breadcrumb-component/breadcrumb-component.vue'
@Component({
  name: 'DetailOne',
  components: {
    BreadcrumbComponent,
  },
})
export default class DetailOne extends Vue {
  private detailOneBuild = detailOneBuild
  private detailOneBreadcrumbs = detailOneBreadcrumbs
  private created() {
    const now = {
      key: 'shPolice',
      title: '智慧公安可视化分析管理系统',
    }
    this.detailOneBreadcrumbs = this.detailOneBreadcrumbs.slice(0, 2)
    this.detailOneBreadcrumbs.findIndex((_item) => _item.key === now.key) < 0 &&
      this.detailOneBreadcrumbs.push(now)
  }
}
