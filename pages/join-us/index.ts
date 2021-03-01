import { workDeatil, workTypeList } from '@core/base-modules/constans/joinUs'
import { Component, Vue } from 'vue-property-decorator'
import CollapseTransition from '@utils/collapse-transition'
@Component({
  name: 'JoinUs',
  components: {
    CollapseTransition,
  },
})
export default class JoinUs extends Vue {
  private workTypeList = workTypeList
  private workDeatil = workDeatil
  private upArrow = require('@/assets/image/joinUs/fold-arrow.png')
  private downArrow = require('@/assets/image/joinUs/unfold-arrow.png')
  // private mounted() {}

  private changeButton(_index: number) {
    if (_index === 0) {
      this.workDeatil[_index].open = !this.workDeatil[_index].open
    }
  }
}
