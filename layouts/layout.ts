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

  private created() {
    // this指向注意
    // window.addEventListener('scroll',this.handleScroll,true);
  }

  get isBack() {
    return this.distance > 1000
  }

  // #region
  handleScroll(e: any) {
    // console.log(e.target.scrollTop);
    this.distance = e.target.scrollTop
    // this.distance = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
    // console.log(this.distance, 'juli');
  }

  backTop() {
    const ele: any = document.querySelector('.mosi-layout')
    // ele && ele.scrollTo(0, 0);
    let distance = ele.scrollTop

    let timer: any = null
    clearInterval(timer)
    timer = setInterval(function () {
      distance -= Math.ceil(distance / 8)
      // console.log(distance, 'distance');
      // 做减速运动
      ele.scrollTo(0, distance)
      if (distance === 0) {
        clearInterval(timer)
      }
    }, 10)
  }

  // destroyed () {
  //   window.removeEventListener('scroll',this.handleScroll,true);
  // }
  // #endregion
}
