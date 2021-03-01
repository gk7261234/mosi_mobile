import { Component, Vue } from 'vue-property-decorator'
import {
  detailOneBreadcrumbs,
  detailSixMessage,
  detailSixValueList,
} from '@core/base-modules/constans/successStories/detail'
import BreadcrumbComponent from '@components/breadcrumb-component/breadcrumb-component.vue'
import ValueListComponent from '@components/value-list-component/value-list-component.vue'
@Component({
  name: 'DetailSix',
  components: {
    BreadcrumbComponent,
    ValueListComponent,
  },
})
export default class DetailSix extends Vue {
  private detailSixMessage = detailSixMessage
  private detailSixValueList = detailSixValueList
  private detailOneBreadcrumbs = detailOneBreadcrumbs
  private created() {
    const now = {
      key: 'sixSystem',
      title: '数据中心建设及数字化管理系统',
    }
    this.detailOneBreadcrumbs = this.detailOneBreadcrumbs.slice(0, 2)
    this.detailOneBreadcrumbs.findIndex((_item) => _item.key === now.key) < 0 &&
      this.detailOneBreadcrumbs.push(now)
  }

  private getNumber(index: number) {
    switch (index) {
      case 0:
        return require('@/assets/image/successStories/detail/num1.png')
      case 1:
        return require('@/assets/image/successStories/detail/num2.png')
      case 2:
        return require('@/assets/image/successStories/detail/num3.png')
      default:
        break
    }
  }
}
