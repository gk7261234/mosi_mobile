import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'ValueListComponent',
})
export default class ValueListComponent extends Vue {
  @Prop({ default: [] })
  valueList!: string[]

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
