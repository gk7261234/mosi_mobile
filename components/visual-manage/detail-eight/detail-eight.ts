import { Component, Vue } from 'vue-property-decorator'
import {
  detailOneBreadcrumbs,
  detailEightMessage,
  detailEightValueList,
} from '@core/base-modules/constans/successStories/detail'
import BreadcrumbComponent from '@components/breadcrumb-component/breadcrumb-component.vue'
import ValueListComponent from '@components/value-list-component/value-list-component.vue'
@Component({
  name: 'DetailFive',
  components: {
    BreadcrumbComponent,
    ValueListComponent,
  },
})
export default class DetailFive extends Vue {
  private detailEightMessage = detailEightMessage
  private detailEightValueList = detailEightValueList
  private detailOneBreadcrumbs = detailOneBreadcrumbs
  private created() {
    const now = {
      key: 'eightSystem',
      title: '数据中心数字化运维系统',
    }
    this.detailOneBreadcrumbs = this.detailOneBreadcrumbs.slice(0, 2)
    this.detailOneBreadcrumbs.findIndex((_item) => _item.key === now.key) < 0 &&
      this.detailOneBreadcrumbs.push(now)
  }
}
