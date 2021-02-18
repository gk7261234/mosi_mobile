import {
  contactUsList,
  ProductSystemList,
  SuccessCaseList,
} from '@core/base-modules/constans/footer'
import { Component, Vue } from 'vue-property-decorator'
// import { RouteEnum } from "@/core/base-modules/constans/enum";
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
  // private productSystemList = []
  // @Ref("lawInfo")
  // private lawInfo!: lawInfo;
  // private JumpToRoute(_key: string) {
  //   _key === "" && this.lawInfo.Show();
  //   for (const [key, value] of Object.entries(RouteEnum)) {
  //     key === _key &&
  //       this.$router.push({
  //         path: value
  //       });
  //   }
  // }
}
