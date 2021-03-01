import { ICommonMenu } from '@core/base-modules/constans'
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'MenuItemChild',
})
export default class MenuItemChild extends Vue {
  @Prop()
  private menuItemmessage!: ICommonMenu
}
