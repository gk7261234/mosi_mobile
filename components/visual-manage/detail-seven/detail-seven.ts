import { Component, Vue } from 'vue-property-decorator'
import {
  detailOneBreadcrumbs,
  detailSevenMessage,
  detailSevenValueList,
} from '@core/base-modules/constans/successStories/detail'
import BreadcrumbComponent from '@components/breadcrumb-component/breadcrumb-component.vue'
import ValueListComponent from '@components/value-list-component/value-list-component.vue'
@Component({
  name: 'DetailSeven',
  components: {
    BreadcrumbComponent,
    ValueListComponent,
  },
})
export default class DetailSeven extends Vue {
  private detailSevenMessage = detailSevenMessage
  private detailSevenValueList = detailSevenValueList
  private detailOneBreadcrumbs = detailOneBreadcrumbs
  private created() {
    const now = {
      key: 'sevenSystem',
      title: '智慧数据中心3D可视化系统',
    }
    this.detailOneBreadcrumbs = this.detailOneBreadcrumbs.slice(0, 2)
    this.detailOneBreadcrumbs.findIndex((_item) => _item.key === now.key) < 0 &&
      this.detailOneBreadcrumbs.push(now)
  }
}
