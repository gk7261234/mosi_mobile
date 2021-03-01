import { Component, Vue } from 'vue-property-decorator'
import {
  detailOneBreadcrumbs,
  detailFourMessage,
  detailFourValueList,
} from '@core/base-modules/constans/successStories/detail'
import BreadcrumbComponent from '@components/breadcrumb-component/breadcrumb-component.vue'
import ValueListComponent from '@components/value-list-component/value-list-component.vue'
@Component({
  name: 'DetailFour',
  components: {
    BreadcrumbComponent,
    ValueListComponent,
  },
})
export default class DetailFour extends Vue {
  private detailFourMessage = detailFourMessage
  private detailFourValueList = detailFourValueList
  private detailOneBreadcrumbs = detailOneBreadcrumbs
  private created() {
    const now = {
      key: 'railwayPlatForm',
      title: '铁路信息综合管理平台',
    }
    this.detailOneBreadcrumbs = this.detailOneBreadcrumbs.slice(0, 2)
    this.detailOneBreadcrumbs.findIndex((_item) => _item.key === now.key) < 0 &&
      this.detailOneBreadcrumbs.push(now)
  }
}
