<!-------- template -------->
<template>
  <div class="search">
    <!-- nav-bar导航栏 -->
    <nav-bar>
      <div slot="left">
        <!-- 返回历史上一页 -->
        <img
          src="~assets/img/back.svg"
          style="padding-top: 10px; margin-right: 10px;"
          width="35px"
          height="35px"
          @click="$router.go(-1)"
        />
      </div>
      <div slot="center">
        <input
          id="search-center"
          type="text"
          placeholder="请输入小说名称"
          maxlength="15"
          @input="inputchange"
          :value="selectInput"
          @click="changeShowTrue"
        />
      </div>
      <div @click="searchNovelList" slot="right">
        <img
          src="~assets/img/search.svg"
          style="margin-top: 5px; margin-right: 10px;"
          width="35px"
          height="35px"
        />
      </div>
    </nav-bar>
    <div v-show="isFlag" class="selectBox">
      <p
        @click="selectClick(select)"
        v-for="(select, index) in selectList"
        :key="index"
      >
        {{ select }}
      </p>
    </div>
    <scroll class="wrapper">
      <novel-recommend :novelRec="novelList"></novel-recommend>
    </scroll>
  </div>
</template>

<!--------- script --------->
<script>
//钩子函数;watch:监听;props:父传子;不用data属性:容易污染;
import Scroll from 'components/content/Scroll'
import NavBar from 'components/common/navbar/NavBar'
import { getSearchTips, getSearchNovel } from '@/network/searchBook.js'
import { debounce, throttle } from '@/common/utils.js'
import NovelRecommend from '@/views/home/childComps/NovelRecommend'
//网络请求
/* function searchNetWork() {
  getSearchTips().then((res) => {
    this.selectList = res.titleList
  })
} */
// const homeDebounce = debounce(searchNetWork, 2000)
export default {
  name: 'Search',
  components: {
    //组件
    Scroll,
    NavBar,
    NovelRecommend,
  },
  data() {
    //数据
    return {
      //是否显示
      isFlag: true,
      //预选数组
      selectList: [],
      //搜索的文本
      selectInput: '',
      //保存防抖函数
      homeDebounce: debounce(this.searchNetWork, 1000),
      //搜索节流
      homeThrottle: throttle(this.searchNetWorkNovel, 3000),
      //符合条件的小说
      novelList: [],
    }
  },
  methods: {
    //方法
    //改变提示是否展示
    changeShowTrue() {
      this.isFlag = true
    },
    //小说搜索功能
    searchNovelList() {
      if (this.selectInput.length >= 2) {
        this.homeThrottle()
      } else {
        console.log('至少两个字')
      }
      setTimeout(() => {
        this.isFlag = false
      }, 1000);
    },
    //发送所有小说详情网络请求
    searchNetWorkNovel() {
      getSearchNovel(this.selectInput).then((res) => {
        this.novelList = res.list
      })
    },
    //发起小说名字网络请求
    searchNetWork() {
      getSearchTips(this.selectInput).then((res) => {
        this.selectList = res.titleList
      })
    },
    //请求函数绑定(防抖,非立即执行)
    inputchange(event) {
      this.selectInput = event.target.value
      //抖动函数来减少请求次数
      this.homeDebounce()
    },
    selectClick(content) {
      //确认点击的内容
      // console.log(content)
      this.selectInput = content
      this.selectList = []
    },
  },
  mounted() {},
}
</script>

<!--------- style --------->
<style lang="less" scoped>
.search {
  position: relative;
  min-height: 100vh;
  z-index: 9;
  background-color: #fff;
  .selectBox {
    position: fixed;
    width: calc(100vw - 120px);
    top: 44px;
    left: 60px;
    background-color: #f1f3f4;
    z-index: 10;
    border-radius: 0 0 20px 20px;
    p {
      height: 20px;
      margin-top: 5px;
      margin-bottom: 5px;
      text-indent: 10px;
    }
  }
  .wrapper {
    height: calc(100vh - 44px);
    // background-color: red;
    overflow: hidden;
  }
  #search-center {
    outline-style: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    // padding: 1px 1px;
    width: 100%;
    margin-top: 7px;
    line-height: 30px;
    height: 30px;
    font-size: 20px;
    text-indent: 10px;
  }
}
</style>
