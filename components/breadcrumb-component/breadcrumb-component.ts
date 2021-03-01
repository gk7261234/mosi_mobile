import { IBreadcrumb } from '@core/base-modules/constans'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'BreadcrumbComponent',
})
export default class BreadcrumbComponent extends Vue {
  @Prop()
  breadcrumbs!: IBreadcrumb[]
}
