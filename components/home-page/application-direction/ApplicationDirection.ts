import { Component, Vue } from 'vue-property-decorator'
import Translate, { Edirection, EUnit, IInputBase } from '@utils/translate'
import * as homepageDesc from '@core/base-modules/constans/homePage'
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
      stretch: 15,
      depth: 25,
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

  private currentIndex = 0
  private myList = [
    {
      text1: '海量数据检索，支撑企业决策制定。',
      text2: '优化存储成本，提高报表生成性能。',
      text3: '防止数据泄露，维护用户数据安全。',
      img: require('../../../assets/images/homePage/app-storage.png'),
    },
    {
      text1: '海量数据检索，支撑企业决策制定。',
      text2: '优化存储成本，提高报表生成性能。',
      text3: '防止数据泄露，维护用户数据安全。',
      img: require('../../../assets/images/homePage/app-storage.png'),
    },
    {
      text1: '海量数据检索，支撑企业决策制定。',
      text2: '优化存储成本，提高报表生成性能。',
      text3: '防止数据泄露，维护用户数据安全。',
      img: require('../../../assets/images/homePage/app-storage.png'),
    },
    {
      text1: '海量数据检索，支撑企业决策制定。',
      text2: '优化存储成本，提高报表生成性能。',
      text3: '防止数据泄露，维护用户数据安全。',
      img: require('../../../assets/images/homePage/app-storage.png'),
    },
    {
      text1: '海量数据检索，支撑企业决策制定。',
      text2: '优化存储成本，提高报表生成性能。',
      text3: '防止数据泄露，维护用户数据安全。',
      img: require('../../../assets/images/homePage/app-storage.png'),
    },
  ]

  private developBottomArr: number[] = []
  private developLeftArr: number[] = []
  private tranItemArr: any = []

  get swiper() {
    return (this.$refs.mySwiper as any).swiperInstance
  }

  mounted() {
    // this.swiper.lazy.loadInSlide(6);
    this.tranItemArr = document.querySelectorAll('swiper__item')
  }

  private onMenuItem(_index: number) {
    this.currentIndex = _index
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

  private rightClick: boolean = false
  private leftClick: boolean = false
  private clickToMove(_item: any, index: number) {
    if (this.currentIndex > index) {
      this.rightClick = false
      // 左
    } else {
      // 右

      this.rightClick = true
    }

    this.currentIndex = index
  }

  private transMove(_add: boolean) {
    for (let index = 0; index < this.tranItemArr.length; index++) {
      const element = this.tranItemArr[index]
      if (index <= 1) {
        element.style.left = `${element.offsetLeft - 500}px`
      }
    }
  }

  private styles(index: number) {
    const left: string = `${index * 80}vm`
    // const bottom: string = `${item.bottom / 10.8}vh`
    return `left:${left}`
  }
}
