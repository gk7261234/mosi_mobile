import {
  componentList,
  successStoriesArr,
} from '@core/base-modules/constans/successStories'
import { Component, Vue } from 'vue-property-decorator'
import VisualManage from '@components/visual-manage/visual-manage.vue'
@Component({
  name: 'SuccessStoriesList',
  components: {
    VisualManage,
  },
})
export default class SuccessStoriesList extends Vue {
  private successStoriesArr = successStoriesArr
  private componentName: string = componentList.length ? componentList[0] : ''
  private activeTitle: string = this.successStoriesArr.length
    ? this.successStoriesArr[0].title
    : ''

  get show() {
    return this.componentName !== ''
  }

  // _title: string
  private clickStory() {
    // console.log(_title);
    // 暂时不做处理
    // this.activeTitle = _title;
  }

  private isActive(_title: string) {
    return this.activeTitle === _title
  }
}
