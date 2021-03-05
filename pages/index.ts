import { Component, Vue } from 'vue-property-decorator'
import { BannerList } from '@core/base-modules/constans/homePage'
import CompanyProfile from '@components/home-page/company-profile/CompanyProfile.vue'
import CooperativePartner from '@components/home-page/cooperative-partner/CooperativePartner.vue'
import Chronicles from '@components/home-page/chronicles/Chronicles.vue'
import ApplicationDirection from '@components/home-page/application-direction/ApplicationDirection.vue'
let vm: any = null
@Component({
  name: 'HomePage',
  components: {
    CompanyProfile,
    CooperativePartner,
    Chronicles,
    ApplicationDirection,
  },
})
export default class HomePage extends Vue {
  private BannerList = BannerList
  public swiperOptions = {
    loop: true,
    lazy: true,
    lazyLoading: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'default-bullet',
      bulletActiveClass: 'active-bullet',
    },
    on: {
      slideChange() {
        const vIndex = (this as any).activeIndex
        const realIndex = (vIndex - 1 + 3) % 3
        vm.currentBannerIndex = realIndex
      },
    },
  }

  private created() {
    vm = this
  }

  // click banner
  swiperClick() {}
}
