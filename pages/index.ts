import { EStatus } from '@core/base-modules/constans/enum'
import * as homepageDesc from '@core/base-modules/constans/homePage'
import { BannerList } from '@core/base-modules/constans/homePage'
import Translate, { Edirection, EUnit, IInputBase } from '@utils/translate'
import { Component, Vue } from 'vue-property-decorator'
// import $ from 'jquery'
let vm: any = null
@Component({
  name: 'HomePage',
})
export default class HomePage extends Vue {
  // #region properties
  private BannerList = BannerList
  private homePageTechList = homepageDesc.homePageTechList
  private applyDirectionList = homepageDesc.applyDirectionList
  private partnersList = homepageDesc.partnersList
  private developList = homepageDesc.developList
  private applyIndex = 0
  private developCtrlBtn = homepageDesc.developCtrlBtn
  private developBottomArr: number[] = []
  private developLeftArr: number[] = []
  // private htmlArr?: any
  private currentBannerIndex: number = 0
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
      // slideChange: () => {
      //   // console.log(this.$refs.bannerSwiper, 'swiper');
      //   const swiper = (this.$refs.bannerSwiper as any).$swiper;
      //   if(swiper && swiper.activeIndex) {
      //     const realIndex = (swiper.activeIndex - 1 + 3)%3;
      //     this.currentBannerIndex = realIndex;
      //     console.log(this.currentBannerIndex, 'realIndex');
      //   }
      // },
      slideChange() {
        const vIndex = (this as any).activeIndex
        const realIndex = (vIndex - 1 + 3) % 3
        // if(realIndex === 0) {
        //   vm.changePosition(true);
        // } else {
        //   vm.changePosition(false);
        // }
        vm.currentBannerIndex = realIndex
      },
    },
  }

  public playerOption = {
    // height: 336,
    // muted: false,
    // 循环播放
    loop: false,
    // 自动播放
    autoplay: true,
    controls: true,
    controlBar: {
      timeDivider: true,
      durationDisplay: true,
      remainingTimeDisplay: true,
      fullscreenToggle: true, // 全屏按钮
    },
    language: 'zh-CN',
    fluid: true,
    aspectRatio: '16:9',
    sources: [
      {
        type: 'video/mp4',
        src: require('@/assets/video/home_banner.mp4'),
      },
    ],
    // poster: require("./img/video/qsj/f1.jpg")
  }

  private videoShow: boolean = false
  private techId: number = 0
  // #endregion

  // #region
  private swiperClick(e: any) {
    if (e.target && e.target.getAttribute('data-play') === 'playVideo') {
      this.playVideo()
    }
  }

  private created() {
    vm = this
  }

  private mounted() {
    for (let index = 0; index < homepageDesc.developBottomArr.length; index++) {
      const element = homepageDesc.developBottomArr[index]
      !this.developBottomArr.includes(element) &&
        this.developBottomArr.push(element / 10.8)
    }
    for (let index = 0; index < homepageDesc.developLeftArr.length; index++) {
      const element = homepageDesc.developLeftArr[index]
      !this.developLeftArr.includes(element) &&
        this.developLeftArr.push(element / 19.2)
    }
    const base: IInputBase = {
      displayVaticalCount: this.developBottomArr,
      displayHorizontalCount: this.developLeftArr,
      selector: '.content__develop__message--position',
      wUnit: EUnit.vw,
      hUnit: EUnit.vh,
      nowIndex: 0,
    }
    Translate.Inst().init(base)
    // this.htmlArr = $('.content__develop__message--position')
  }
  // #endregion

  get swiper() {
    return (this.$refs.bannerSwiper as any).swiperInstance
  }

  private selectTechnology(id: number) {
    this.techId = id
  }

  private removeTechnology() {
    this.techId = 0
  }

  private playVideo() {
    this.videoShow = !this.videoShow
    if (this.videoShow) {
      ;(this.$refs.bannerVideo as any).play()
    } else {
      ;(this.$refs.bannerVideo as any).pause()
    }
  }

  private mouseOverActive(_index: number) {
    this.partnersList.forEach((item, index) => {
      if (index === _index) {
        item.active = true
      } else {
        item.active = false
      }
    })
  }

  private mouseOverEvent(_index: number) {
    this.applyIndex = _index
    this.applyDirectionList.forEach((item, index) => {
      if (index === _index) {
        item.active = true
      } else {
        item.active = false
      }
    })
  }

  private mouseLeave(_index: number) {
    this.partnersList[_index].active = false
  }

  private styles(item: homepageDesc.IMessage, index: number) {
    const left: string =
      index <= 0
        ? `${65 / 19.2}vw`
        : index <= 6
        ? `${(161 / 19.2) * index + 65 / 19.2}vw`
        : `${1300 / 19.2}vw`
    const bottom: string = `${item.bottom / 10.8}vh`
    return `left:${left};bottom:${bottom}`
  }

  private imgClass(_index: number) {
    return _index % 2
      ? 'content__develop--btns-right'
      : 'content__develop--btns-left'
  }

  private rightClick: boolean = false
  private leftClick: boolean = false
  private clickToMove(item: homepageDesc.ICtrlBtn, index: number) {
    this.rightClick = index % 2 !== 0
    this.leftClick = index % 2 === 0
    this.leftClick && (this.developCtrlBtn[1].status = EStatus.normal)
    this.rightClick && (this.developCtrlBtn[0].status = EStatus.normal)
    if (item.status !== EStatus.disabled) {
      const status: boolean = Translate.Inst().translateInst(
        this.rightClick ? Edirection.leftBottom : Edirection.rightBottom,
        index % 2 !== 0
      )
      !status && (item.status = EStatus.disabled)
    }
  }
  // #endregion
}
