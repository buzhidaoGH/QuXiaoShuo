<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
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
    <h3>随机推荐</h3>
    <novel-recommend :novelRec="randomList"></novel-recommend>
  </div>
</template>

<script>
import HomeNavBar from 'components/content/HomeNavBar'
import { getHomeMultidata } from 'network/home.js'
import { getRandomMultidata } from 'network/home.js'
import NovelRanking from './childComps/NovelRanking'
import NovelRecommend from './childComps/NovelRecommend'
export default {
  name: 'Home',
  components: {
    NovelRanking,
    HomeNavBar,
    NovelRecommend,
  },
  methods: {
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
  },
  data() {
    return {
      hits: null,
      latestUpdates: null,
      collects: null,
      randomList: null,
      novelList: null,
      current: 1,
    }
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
      this.randomList = res.random
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
