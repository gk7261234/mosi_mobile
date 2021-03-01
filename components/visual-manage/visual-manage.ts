import { Component, Vue } from 'vue-property-decorator'
import { visualArr } from '@core/base-modules/constans/successStories'
@Component({
  name: 'VisualManage',
})
export default class VisualManage extends Vue {
  private visualArr = visualArr
  private styles(_bg: string) {
    return `background:url(${_bg}) no-repeat 0 0 / 100% 100% content-box`
  }

  private showDetail(_name: string) {
    this.$router.push({
      path: this.$route.path,
      query: {
        name: _name,
      },
    })
  }
}
