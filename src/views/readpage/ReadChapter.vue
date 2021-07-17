<!-------- template -------->
<template>
  <div class="readchapter">
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
        章节名
      </div>
    </nav-bar>
    <scroll class="wrapper">
      章节内容
      {{ this.$route.params.novelkey }}
      {{ this.$route.params.weight }}
      {{ this.$route.query.novelkey }}
      {{ this.$route.query.weight }}
    </scroll>
  </div>
</template>

<!--------- script --------->
<script>
//钩子函数;filters:过滤器;watch:监听;props:父传子;不用data属性:容易污染;
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/content/Scroll'
export default {
  name: 'ReadChapter',
  components: {
    //组件
    NavBar,
    Scroll,
  },
  data() {
    //数据
    return {}
  },
  methods: {
    //方法
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped>
.readchapter {
  position: relative;
  min-height: 100vh;
  z-index: 9;
  background-color: #fff;
  .wrapper {
    height: calc(100vh - 44px);
    overflow: hidden;
  }
}
</style>
