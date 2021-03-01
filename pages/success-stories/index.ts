import { Component, Vue, Watch } from 'vue-property-decorator'
import StoriesList from '@components/success-stories-list/success-stories-list.vue'
import StoriesDetail from '@components/success-stories-detail/index.vue'
@Component({
  name: 'SuccessStories',
  components: {
    StoriesDetail,
    StoriesList,
  },
})
export default class SuccessStories extends Vue {
  private component: string = 'StoriesList'
  get routeQuery() {
    return this.$route.query
  }

  @Watch('routeQuery', { deep: true, immediate: true })
  changeComponent(_query: object) {
    this.component =
      Object.keys(_query).length > 0 ? 'StoriesDetail' : 'StoriesList'
  }
}
