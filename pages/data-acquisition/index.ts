import { Component, Vue } from 'vue-property-decorator'
import {
  dataAcquisitionArr,
  featuresArr,
  advantagesArr,
  applicationScenarioList,
} from '@core/base-modules/constans/productSystem/dataAcquisition'
import AnchorComponent from '@components/anchor-component/anchor-component.vue'
@Component({
  name: 'DataAcquisition',
  components: {
    AnchorComponent,
  },
})
export default class DataAcquisition extends Vue {
  private dataAcquisitionArr = dataAcquisitionArr
  private featuresArr = featuresArr
  private advantagesArr = advantagesArr
  private hoverIndex: number = -1
  private applicationScenarioList = applicationScenarioList

  // #region methods
  private mouseOver(_index: number) {
    this.hoverIndex = _index
  }

  private mouseOut() {
    this.hoverIndex = -1
  }
  // #endregion
}
