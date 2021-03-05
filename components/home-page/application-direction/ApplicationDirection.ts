import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'CompanyIntrodution',
})
export default class CompanyIntrodution extends Vue {
  public stretchNum = 3
  public swiperOptions = {
    loop: true,
    effect: 'coverflow',
    slidesPerView: 1,
    centeredSlides: true,
    lazy: true,
    lazyLoading: true,
    loadPrexNextAmount: 5,
    coverflowEffect: {
      rotate: 0,
      stretch: 10,
      depth: 10,
      modifier: 10,
      slideShadows: false,
    },
    on: {
      lazyImageReady(slideEl: string, imageEl: string) {
        console.log(slideEl, imageEl)
      },
    },
  }

  private BannerList: any = [
    require('../../../assets/images/homePage/app-storage.png'),
    require('../../../assets/images/homePage/app-storage.png'),
    require('../../../assets/images/homePage/app-storage.png'),
    require('../../../assets/images/homePage/app-storage.png'),
  ]

  private MenuItems: any[] = [
    {
      isActive: true,
      title: '数据采集/管理',
    },
    {
      isActive: false,
      title: '数据治理',
    },
    {
      isActive: false,
      title: '数据存储',
    },
    {
      isActive: false,
      title: '数据应用/数字孪生',
    },
  ]

  get swiper() {
    return (this.$refs.mySwiper as any).swiperInstance
  }

  mounted() {
    // this.swiper.lazy.loadInSlide(6);
  }

  private onMenuItem(_index: number) {
    this.MenuItems = this.MenuItems.map((item, index) => {
      if (_index === index) {
        item.isActive = true
        return item
      } else {
        item.isActive = false
        return item
      }
    })
  }

  private handleSwiperReadied() {
    // console.log("加载完成：");
    this.swiper.slideTo(4, 100, false)
  }
}
