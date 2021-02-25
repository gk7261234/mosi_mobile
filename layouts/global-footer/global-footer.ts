import {
  contactUsList,
  ProductSystemList,
  SuccessCaseList,
} from '@core/base-modules/constans/footer'
import { Component, Vue } from 'vue-property-decorator'
import Copyright from './law/law.vue'
@Component({
  name: 'GlobalFooter',
  components: {
    Copyright,
  },
})
export default class GlobalFooter extends Vue {
  private ProductSystemList = ProductSystemList
  private SuccessCaseList = SuccessCaseList
  private contactUsList = contactUsList
}
