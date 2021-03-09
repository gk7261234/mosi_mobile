import { Component, Vue } from 'vue-property-decorator'
import MenuTab from '@components/menu-tab/menu-tab.vue'

@Component({
  name: 'GlobalHeader',
  components: {
    MenuTab,
  },
})
export default class GlobalHeader extends Vue {
  private isShowMenu = false
  onSwitchMenu() {
    this.isShowMenu = !this.isShowMenu
    this.menuAni()
  }

  // 菜单动画
  private menuAni() {
    const ele = document.querySelectorAll('.item') as any
    ele[1].style.visibility = this.isShowMenu ? 'hidden' : 'initial'
    ele[0].style.transform = this.isShowMenu ? 'rotate(51deg)' : 'initial'
    ele[2].style.transform = this.isShowMenu ? 'rotate(-51deg)' : 'initial'
    // for (let i = 0; i < ele?.length; i++) {
    //   const itemEle = ele[i]
    //   if (i === 0) {
    //     itemEle.style.transform = this.isShowMenu ? 'rotate(45deg)' : 'initial'
    //   } else if (i === 1) {
    //     itemEle.style.visibility = this.isShowMenu ? 'hidden' : 'initial'
    //   } else if (i === 2) {
    //     itemEle.style.transform = this.isShowMenu ? 'rotate(-45deg)' : 'initial'
    //   }
    // }
  }
}
