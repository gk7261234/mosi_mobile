import { Component, Vue } from 'vue-property-decorator'
import {
  detailOneBreadcrumbs,
  detailTwoMessage,
} from '@core/base-modules/constans/successStories/detail'
import BreadcrumbComponent from '@components/breadcrumb-component/breadcrumb-component.vue'
@Component({
  name: 'DetailTwo',
  components: {
    BreadcrumbComponent,
  },
})
export default class DetailTwo extends Vue {
  private detailTwoMessage = detailTwoMessage
  private detailOneBreadcrumbs = detailOneBreadcrumbs
  private created() {
    const now = {
      key: 'shPolice',
      title: '瀛洲智眼安防系统',
    }
    this.detailOneBreadcrumbs = this.detailOneBreadcrumbs.slice(0, 2)
    this.detailOneBreadcrumbs.findIndex((_item) => _item.key === now.key) < 0 &&
      this.detailOneBreadcrumbs.push(now)
  }
}
