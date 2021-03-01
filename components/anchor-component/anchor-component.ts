import { IAnchor } from '@core/base-modules/constans'
import anchorJump from '@utils/anchorJump'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'AnchorComponent',
})
export default class AnchorComponent extends Vue {
  @Prop()
  anchors!: IAnchor[]

  @Prop()
  jumpRouter?: boolean

  private activeAnchor: string = this.anchors[0].link

  private mounted() {
    if (typeof this.jumpRouter !== 'undefined' && this.jumpRouter) {
      const link = anchorJump.getQueryString()
      link !== null && this.jumpAnchor(link)
    }
  }

  private jumpAnchor(_link: string) {
    this.activeAnchor = _link
    anchorJump.goAnchor(_link)
  }

  private activeClass(_link: string) {
    return this.activeAnchor === _link
      ? 'content__header--anchor-each--active'
      : 'content__header--anchor-each'
  }
}
