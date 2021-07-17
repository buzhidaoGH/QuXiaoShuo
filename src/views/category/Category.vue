<!-------- template -------->
<template>
  <div class="category">
    <!-- nav-bar -->
    <nav-bar>
      <div slot="center">分类</div>
      <div slot="right">
        <router-link to="search">
          <img
            src="~assets/img/search.svg"
            style="margin-top: 5px; margin-right: 10px;"
            width="35px"
            height="35px"
          />
        </router-link>
      </div>
    </nav-bar>
    <div style="clear: both;"></div>
    <div style="height: calc(100vh - 49px - 44px);">
      <div class="category-side">
        <tab-controller
          @tabClick="clickCategory"
          :titles="titles"
          ref="tabController"
        ></tab-controller>
      </div>
      <div class="category-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<!--------- script --------->
<script>
import NavBar from 'components/common/navbar/NavBar'
import TabController from 'components/content/TabController'
export default {
  name: 'Category',
  components: {
    NavBar,
    TabController,
  },
  data() {
    //数据
    return {
      titles: [
        '全部分类',
        '玄幻小说',
        '修真小说',
        '都市小说',
        '穿越小说',
        '网游小说',
        '科幻小说',
        '其他小说',
      ],
    }
  },
  methods: {
    clickCategory(e) {
      // console.log(this.titles[e]);
      //切换路径
      this.$router.replace('/category/' + e).catch((err) => {})
    },
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped>
.category-side {
  float: left;
  width: 33%;
  margin-right: 10px;
  height: 100%;
  text-align: center;
  background-color: #f2f2f2;
}
.category-content {
  width: 57%;
  float: left;
  margin-left: 10px;
  height: 100%;
}
</style>
