<template>
  <div class="home">
    <!-- 导航栏 -->
    <home-nav-bar></home-nav-bar>

    <!-- 内容部分 -->
    <scroll
      @scroll="contentScroll"
      @pullingUp="loadMore"
      :probeType="3"
      :pullUpLoad="true"
      class="wrapper"
      ref="scroll"
    >
      <!-- ranking-nav -->
      <div class="ranking-nav">
        <div
          class="left"
          :class="{ active: 1 == current }"
          @click="changeHits(1)"
        >
          热门排行
        </div>
        <div
          class="center"
          :class="{ active: 2 == current }"
          @click="changeLatestUpdates(2)"
        >
          最新更新
        </div>
        <div
          class="right"
          :class="{ active: 3 == current }"
          @click="changeCollects(3)"
        >
          收藏排行
        </div>
      </div>
      <div class="ranking">
        <novel-ranking :novelList="novelList"></novel-ranking>
      </div>
      <div style="clear: both;"></div>
      <!-- 随机推荐部分 -->
      <h3>随机推荐</h3>
      <novel-recommend :novelRec="randomList.list"></novel-recommend>
    </scroll>

    <back-top v-show="isShowTop" @click.native="backClick"></back-top>
  </div>
</template>

<script>
import HomeNavBar from 'components/content/HomeNavBar'
import { getHomeMultidata } from 'network/home.js'
import { getRandomMultidata } from 'network/home.js'
import NovelRanking from './childComps/NovelRanking'
import NovelRecommend from './childComps/NovelRecommend'
import Scroll from 'components/content/Scroll'
import BackTop from 'components/content/BackTop'
import { debounce } from 'common/utils.js'
export default {
  name: 'Home',
  components: {
    NovelRanking,
    HomeNavBar,
    NovelRecommend,
    Scroll,
    BackTop,
  },
  data() {
    return {
      hits: null,
      latestUpdates: null,
      collects: null,
      randomList: { page: 0, list: [] },
      novelList: null,
      current: 1,
      isShowTop: false,
    }
  },
  methods: {
    loadMore() {
      //上拉加载更多
      // console.log('接收,上拉加载更多')
      const page = this.randomList.page + 1
      //页码加1
      //请求网络
      getRandomMultidata(page).then((res) => {
        this.randomList.list.push(...res.random.list)
        this.randomList.page += 1
        //刷新上拉加载功能
        this.$refs.scroll.finishPullUp()
      })
    },
    changeHits(e) {
      this.novelList = this.hits
      this.current = e
    },
    changeLatestUpdates(e) {
      this.novelList = this.latestUpdates
      this.current = e
    },
    changeCollects(e) {
      this.novelList = this.collects
      this.current = e
    },
    backClick() {
      // console.log("点击TOP");
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      //1.scroll的x,y值(判断BackTop是否显示)
      //console.log(position);
      if (position.y < -800) {
        this.isShowTop = true
      } else {
        this.isShowTop = false
      }
    },
  },
  created() {
    //1.请求多个数据(异步操作)
    getHomeMultidata().then((res) => {
      this.hits = res.hits
      this.latestUpdates = res.latestUpdates
      this.collects = res.collects
      this.novelList = this.hits
    })
    //2.请求随机推荐
    getRandomMultidata().then((res) => {
      this.randomList.list = res.random.list
      this.randomList.page = res.random.pageNum
    })
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

<style lang="less" scoped>
.active {
  color: #1387f4;
  font-weight: bold;
}
.home {
  .wrapper {
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }
  height: calc(100vh - 49px);
  background-color: #f1f3f4;
  .ranking-nav {
    border-radius: 25px;
    border: 2px solid #8ac007;
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    font-size: 16px;
    color: #000000;
    .left,
    .right,
    .center {
      width: 25%;
    }
    background-color: #fff;
    justify-content: center;
  }
}
</style>
