import { CountRoma } from '@core/base-modules/constans/enum'
import { SloutCaseList } from '@core/base-modules/constans/soluteCase'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'SoluteCase',
})
export default class SoluteCase extends Vue {
  private SloutCaseList = SloutCaseList
  private CountRoma = CountRoma

  private mouseOverEvent(_index: number) {
    this.SloutCaseList.forEach((item, index) => {
      if (index === _index) {
        item.active = true
      } else {
        item.active = false
      }
    })
    this.SloutCaseList[_index].active = true
  }

  private toPage(_route: string, _query: string) {
    if (_route) {
      this.$router.push({
        path: _route,
        query: {
          name: _query,
        },
      })
    }
  }
}
