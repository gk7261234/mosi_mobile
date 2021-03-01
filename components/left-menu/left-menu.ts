import { Component, Prop, Vue } from 'vue-property-decorator'
import CommonMenus from '@components/common-menus/common-menus.vue'
@Component({
  name: 'LeftMenu',
  components: {
    CommonMenus,
  },
})
export default class LeftMenu extends Vue {
  @Prop()
  title!: string
}
