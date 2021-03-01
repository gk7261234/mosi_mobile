import { Component, Vue, Watch } from 'vue-property-decorator'
import DetailOne from '@components/visual-manage/detail-one/detail-one.vue'
import DetailTwo from '@components/visual-manage/detail-two/detail-two.vue'
import DetailThree from '@components/visual-manage/detail-three/detail-three.vue'
import DetailFour from '@components/visual-manage/detail-four/detail-four.vue'
import DetailFive from '@components/visual-manage/detail-five/detail-five.vue'
import DetailSix from '@components/visual-manage/detail-six/detail-six.vue'
import DetailSeven from '@components/visual-manage/detail-seven/detail-seven.vue'
import DetailEight from '@components/visual-manage/detail-eight/detail-eight.vue'
@Component({
  name: 'SuccessStoriesDetail',
  components: {
    DetailOne,
    DetailTwo,
    DetailThree,
    DetailFour,
    DetailFive,
    DetailSix,
    DetailSeven,
    DetailEight,
  },
})
export default class SuccessStoriesDetail extends Vue {
  private component: string = ''
  get routeQuery() {
    return this.$route.query
  }

  @Watch('routeQuery', { deep: true, immediate: true })
  changeComponent(_query: any) {
    if (_query && typeof _query.name === 'string') {
      this.component = _query.name
    }
  }
}
