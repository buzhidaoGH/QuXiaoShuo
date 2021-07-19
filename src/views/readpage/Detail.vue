<!-------- template -------->
<template>
  <div class="detail">
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
        <span style="text-align: center;">
          {{ novelInfo.title }}
        </span>
      </div>
      <div slot="right">
        <div style="font-size: 12px;" @click="inputBookrack">加入书架</div>
      </div>
    </nav-bar>
    <scroll :pullUpLoad="true" class="wrapper">
      <div class="novel">
        <img
          width="160px"
          height="200px"
          :src="
            novelInfo.image.replace(
              'http://www.biquge.tv/',
              'https://www.qbiqu.com/',
            )
          "
        />
        <div class="novel-right">
          <p>书名：{{ novelInfo.title }}</p>
          <p>作者：{{ novelInfo.author }}</p>
          <p>类型：{{ novelInfo.category }}</p>
          <p>章节数：{{ novelInfo.chapters }}</p>
          <p>最近更新</p>
          <p>{{ novelInfo.update | updateFilter }}</p>
          <p>{{ novelInfo.description | ellipsis }}</p>
        </div>
      </div>
      <div class="novel-chapter">
        &nbsp;&nbsp;&nbsp;&nbsp;章节名
        <span>序号</span>
        <div
          class="chapter-one"
          v-for="(chapter, index) in chapterInfo"
          :key="chapter.weight"
          @click="readpage(novelInfo.novelkey, chapter.weight)"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;{{ chapter.title | chapterTitle }}
          <span>{{ index + 1 }}</span>
        </div>
      </div>
    </scroll>
  </div>
</template>

<!--------- script --------->
<script>
//钩子函数;filters:过滤器;watch:监听;props:父传子;不用data属性:容易污染;
import { getNovelInfo } from '@/network/novelInfo.js'
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/content/Scroll'
export default {
  name: 'Detail',
  components: {
    //组件
    NavBar,
    Scroll,
  },
  data() {
    //数据
    return {
      novelInfo: null,
      chapterInfo: [],
    }
  },
  filters: {
    ellipsis(value) {
      if (!value) return '暂无简介'
      value = value.replace(/<br\/>/g, '')
      return value
    },
    chapterTitle(value) {
      if (!value) return '无题'
      if (value.length > 15) {
        return value.slice(0, 15) + '...'
      }
      return value
    },
    updateFilter(date) {
      date = date.split('.')[0]
      date = date.replace('T', ' ')
      return date
    },
  },
  methods: {
    //方法
    readpage(novel, weight) {
      console.log(novel, weight)
      this.$router.push({
        path: '/readChapter',
        query: {
          novel,
          weight,
        },
      })
      // this.$router.push(`/readChapter/${novelkey}/${weight}`)
    },
    inputBookrack() {
      if (localStorage.getItem('bookrackList') == null) {
        let num = []
        localStorage.setItem('bookrackList', JSON.stringify(num))
      }
      let bookrackList = JSON.parse(localStorage.getItem('bookrackList'))
      bookrackList.push(this.novelInfo.novelkey)
      let unqueBookrackList = Array.from(new Set(bookrackList))
      localStorage.setItem('bookrackList', JSON.stringify(unqueBookrackList))
      localStorage.setItem(
        this.novelInfo.novelkey,
        JSON.stringify(this.novelInfo),
      )
    },
  },
  created() {
    console.log('发送网络')
    getNovelInfo(this.$route.params.novelkey).then((res) => {
      this.novelInfo = res.novelInfo
      this.chapterInfo = res.chapterInfo
    })
  },
  computed: {
    realImg() {
      return this.novelInfo.image.replace(
        'http://www.biquge.tv/',
        'https://www.qbiqu.com/',
      )
    },
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped>
.detail {
  position: relative;
  min-height: 100vh;
  z-index: 9;
  background-color: #fff;
  .wrapper {
    height: calc(100vh - 44px);
    overflow: hidden;
    .novel {
      overflow: hidden;
      height: 215px;
      .novel-right {
        float: right;
        width: 180px;
      }
    }
    .novel-chapter {
      span {
        float: right;
        width: 60px;
        text-align: center;
      }
      .chapter-one {
        line-height: 30px;
        height: 30px;
        border-bottom: 1px solid #EFEFEF;
      }
    }
  }
}
</style>
