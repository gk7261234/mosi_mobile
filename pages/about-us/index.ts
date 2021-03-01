import { Component, Vue } from 'vue-property-decorator'
import AnchorComponent from '@components/anchor-component/anchor-component.vue'
import { aboutUsAchor } from '@core/base-modules/constans/aboutUs'
@Component({
  name: 'AboutUs',
  components: {
    AnchorComponent,
  },
})
export default class AboutUs extends Vue {
  private aboutUsAchor = aboutUsAchor
}
