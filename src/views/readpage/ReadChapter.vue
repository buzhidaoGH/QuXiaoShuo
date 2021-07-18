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
        {{ chapter.title }}
      </div>
    </nav-bar>
    <scroll :pullUpLoad="true" class="wrapper">
      <!-- {{ chapter.content }} -->
      <div class="chapter-content">
        <p
          v-for="(content, index) in chapter.contents"
          v-show="index != 0"
          :key="index"
        >
          {{ content }}
        </p>
      </div>
    </scroll>
  </div>
</template>

<!--------- script --------->
<script>
//钩子函数;filters:过滤器;watch:监听;props:父传子;不用data属性:容易污染;
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/content/Scroll'
import { getChapterInfo } from '@/network/novelInfo.js'
export default {
  name: 'ReadChapter',
  components: {
    //组件
    NavBar,
    Scroll,
  },
  data() {
    //数据
    return {
      chapter: {
        title: '',
        contents: [],
      },
    }
  },
  /*   filters:{
    contentFile(value) {
      console.log('替换');
      value = value.replace(/\s\s\s\s+/g,"<br/>")
      return value
    },
  }, */
  created() {
    getChapterInfo(this.$route.query.novel, this.$route.query.weight).then(
      (res) => {
        this.chapter.title = res.chapterInfo.title
        this.chapter.contents = res.chapterInfo.content.split(/\s\s\s\s+/g)
      },
    )
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
    .chapter-content {
      font-size: 18px;
      font-weight: 550;
      p {
        text-indent: 2em;
        padding-top: 10px;
      }
    }
  }
}
</style>
