import { Component, Vue } from 'vue-property-decorator'
import GlobalHeader from './global-header/global-header.vue'
import GlobalFooter from './global-footer/global-footer.vue'

@Component({
  components: {
    GlobalHeader,
    GlobalFooter,
  },
})
export default class LayoutComponent extends Vue {
  private headerClass = ''
  private distance: number = 0

  private mounted() {
    const vm = this
    window.addEventListener('scroll', vm.handleScroll, true)
  }

  get isBack() {
    return this.distance > 1000
  }

  // #region
  handleScroll() {
    this.distance =
      document.body.scrollTop ||
      document.documentElement.scrollTop ||
      window.pageYOffset
  }

  backTop() {
    const ele: any = document.querySelector('.mosi-layout')
    let distance = ele.scrollTop

    let timer: any = null
    clearInterval(timer)
    timer = setInterval(function () {
      distance -= Math.ceil(distance / 8)
      ele.scrollTo(0, distance)
      if (distance === 0) {
        clearInterval(timer)
      }
    }, 10)
  }

  destroyed() {
    const vm = this
    window.removeEventListener('scroll', vm.handleScroll, true)
  }
}
