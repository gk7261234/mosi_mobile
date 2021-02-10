import {
  systemBigDataPlatform,
  VisualizationTools,
} from '@core/base-modules/constans/productSystem'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'BigDataPlatform',
})
export default class BigDataPlatform extends Vue {
  private bigDataPlatForm = systemBigDataPlatform
  private VisualizationTools = VisualizationTools
  private mounted() {
    //
  }
}
