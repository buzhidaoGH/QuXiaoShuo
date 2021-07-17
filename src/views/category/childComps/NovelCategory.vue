<!-------- template -------->
<template>
  <scroll
    :pullUpLoad="true"
    ref="scroll"
    @pullingUp="loadMore"
    class="novel-wrapper"
  >
    <novel-category-list :novelList="novelInfo.list"></novel-category-list>
  </scroll>
</template>

<!--------- script --------->
<script>
//钩子函数;filters:过滤器;watch:监听;props:父传子;不用data属性:容易污染;
import NovelCategoryList from './NovelCategoryList'
import { getCategoryInfo } from '@/network/category.js'
import Scroll from 'components/content/Scroll'
import { debounce } from 'common/utils.js'
export default {
  name: 'NovelCategory',
  components: {
    //组件
    NovelCategoryList,
    Scroll,
  },
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  data() {
    //数据
    return {
      novelInfo: {
        page: 1,
        list: [],
      },
    }
  },
  created() {
    console.log('created创建' + this.id)
    getCategoryInfo(this.id, 1).then((res) => {
      this.novelInfo.page = res.pageNum
      this.novelInfo.list = res.list
    })
  },
  methods: {
    loadMore() {
      //上拉加载更多
      console.log('接收,上拉加载更多')
      const page = this.novelInfo.page + 1
      //页码加1
      //请求网络
      getCategoryInfo(this.id, page).then((res) => {
        this.novelInfo.list.push(...res.list)
        this.novelInfo.page += 1
        //刷新上拉加载功能
        this.$refs.scroll.finishPullUp()
      })
    },
  },
  mounted() {
    const homeDebounce = debounce(this.$refs.scroll.refresh,300);
    //3.监听图片加载完成
    this.$bus.$on('novelImageLoad', () => {
      // console.log('-----');
      homeDebounce();
    })
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped>
.novel-wrapper {
  height: 100%;
  overflow: hidden;
}
</style>
