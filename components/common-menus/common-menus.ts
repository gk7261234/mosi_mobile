import { ICommonMenu } from '@core/base-modules/constans'
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import MenuItemChild from './menu-item-child/menu-item-child.vue'
@Component({
  name: 'CommonMenus',
  components: {
    MenuItemChild,
  },
})
export default class CommonMenus extends Vue {
  @Prop()
  private menus!: ICommonMenu[]

  @Prop()
  private activeName!: string

  @Prop()
  private openNames!: Array<string>

  @Ref('menus')
  private menuRef!: HTMLElement

  private selectMenuItem(_name: string) {
    this.$emit('updateComponent', _name)
  }

  get names() {
    return this.menus.length ? [this.menus[0].name] : []
  }

  private openChange() {
    const menus = (this.menuRef as any).$children
    this.$emit('updateOpenName', this.names)
    if (menus && menus.length) {
      for (let index = 0; index < menus.length; index++) {
        const element = menus[index]
        element.opened = index === 0
      }
      this.$nextTick(() => {
        ;(this.menuRef as any).updateOpened()
      })
    }
  }
}
