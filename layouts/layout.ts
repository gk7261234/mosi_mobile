import { Component, Vue } from 'vue-property-decorator'
import GlobalHeader from '@components/layout/global-header/global-header.vue'
import GlobalFooter from '@components/layout/global-footer/global-footer.vue'

@Component({
  components: {
    GlobalHeader,
    GlobalFooter,
  },
})
export default class LayoutComponent extends Vue {
  private distance: number = 0

  private mounted() {
    const vm = this
    window.addEventListener('scroll', vm.handleScroll, true)
  }

  // #region
  handleScroll() {
    this.distance =
      document.body.scrollTop ||
      document.documentElement.scrollTop ||
      window.pageYOffset
  }

  destroyed() {
    const vm = this
    window.removeEventListener('scroll', vm.handleScroll, true)
  }
  // #endregion
}
