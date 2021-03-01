import { Component, Vue } from 'vue-property-decorator'
import {
  detailOneBreadcrumbs,
  detailThreeMessage,
  detailThreeValueList,
} from '@core/base-modules/constans/successStories/detail'
import BreadcrumbComponent from '@components/breadcrumb-component/breadcrumb-component.vue'
import ValueListComponent from '@components/value-list-component/value-list-component.vue'
@Component({
  name: 'DetailThree',
  components: {
    BreadcrumbComponent,
    ValueListComponent,
  },
})
export default class DetailThree extends Vue {
  private detailThreeMessage = detailThreeMessage
  private detailThreeValueList = detailThreeValueList
  private detailOneBreadcrumbs = detailOneBreadcrumbs
  private created() {
    const now = {
      key: 'jinAnPolice',
      title: '重点目标立体防护平台',
    }
    this.detailOneBreadcrumbs = this.detailOneBreadcrumbs.slice(0, 2)
    this.detailOneBreadcrumbs.findIndex((_item) => _item.key === now.key) < 0 &&
      this.detailOneBreadcrumbs.push(now)
  }
}
