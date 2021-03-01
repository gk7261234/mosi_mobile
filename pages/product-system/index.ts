import { Component, Vue } from 'vue-property-decorator'
import {
  systemBigDataPlatform,
  IMessage,
  tools,
  IToolsDesc,
} from '@core/base-modules/constans/productSystem'
@Component({
  name: 'ProductSystem',
})
export default class ProductSystem extends Vue {
  // private poster = require('@/assets/image/productSystem/product-banner.png')
  private dataPlatfromArr: IMessage[] = systemBigDataPlatform
  private visualizationTools: IToolsDesc[] = tools
  private tabPlatform: string = systemBigDataPlatform[0].title
  private showlist = systemBigDataPlatform[0].list
  private label(_item: IMessage) {
    return (h: any) => {
      return h(
        'div',
        {
          class: 'product-system__content--tab-title',
        },
        [
          h('img', {
            class: 'product-system--img',
            attrs: {
              src:
                this.tabPlatform === _item.title ? _item.hoverImg : _item.img,
            },
          }),
          h(
            'p',
            {
              class: {
                'product-system--normal-title':
                  this.tabPlatform !== _item.title,
                'product-system--active-title':
                  this.tabPlatform === _item.title,
              },
            },
            _item.title
          ),
        ]
      )
    }
  }

  private showBySingular(index: number) {
    return (index + 1) % 2 !== 0
  }

  private jumpRouter(_path: string) {
    // console.log(_path);
    this.$router.push({
      path: _path,
    })
  }

  private imgByActive(_item: IMessage) {
    return this.tabPlatform === _item.title ? _item.hoverImg : _item.img
  }

  private tabsClass(_title: string) {
    return this.tabPlatform === _title
      ? ['ivu-tabs-tab', 'ivu-tabs-tab-active']
      : 'ivu-tabs-tab'
  }

  private titleClass(_title: string) {
    return this.tabPlatform === _title
      ? 'product-system--active-title'
      : 'product-system--normal-title'
  }

  private selectPlatform(_title: string) {
    this.tabPlatform = _title
    this.dataPlatfromArr.forEach((item) => {
      if (item.title === _title) {
        this.showlist = item.list
      }
    })
  }
}
