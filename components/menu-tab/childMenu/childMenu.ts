import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'ChildMenu',
})
export default class ChildMenu extends Vue {
  @Prop()
  private parentItem: any
}
