<!-------- template -------->
<template>
  <div class="bookrack">
    <nav-bar>
      <div slot="left" @click="clearBook" style="text-align: center;">清空</div>
      <div slot="center">我的书架</div>
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

    <scroll class="wrapper" :pullUpLoad="true">
      <p style="font-size: 20px; text-align: center;">{{ msg }}</p>
      <div v-for="book in bookList" :key="book.novelkey" class="block">
        <router-link :to="'/novelInfo/' + book.novelkey">
          <div class="block_img">
            <img
              height="100"
              width="80"
              :src="book.image"
              onerror="javascript:this.src='http://m.biquge.tv/style/noimg.jpg'"
            />
          </div>
          <div class="block_txt">
            <h2>[{{ book.category.substring(0, 2) }}]{{ book.title }}</h2>
            <p></p>
            <p>作者：{{ book.author }}</p>
            <p>{{ book.description | ellipsis }}</p>
          </div>
        </router-link>
        <div style="clear: both;"></div>
      </div>
    </scroll>
  </div>
</template>

<!--------- script --------->
<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/content/Scroll'
export default {
  name: 'Bookrack',
  data() {
    //数据
    return {
      bookrackList: [], //通过key来获取value解析数据
      bookList: [], //记录书的key
      msg: null,
    }
  },
  components: {
    //组件
    NavBar,
    Scroll,
  },
  filters: {
    ellipsis(value) {
      if (!value) return '暂无简介'
      value = value.replace(/<br\/>/g, '')
      if (value.length > 30) {
        return value.slice(0, 30) + '...'
      }
      return value
    },
  },
  created() {
    this.bookrackList = JSON.parse(localStorage.getItem('bookrackList'))
    if (this.bookrackList) {
      if (this.bookrackList.length) {
        //不为空
        console.log('不为空')
        for (let index = 0; index < this.bookrackList.length; index++) {
          const element = this.bookrackList[index]
          this.bookList.push(JSON.parse(localStorage.getItem(element)))
        }
      } else {
        this.msg = '书架为空，请添加小说或者关闭无痕浏览'
      }
    } else {
      let cont = []
      localStorage.setItem('bookrackList', JSON.stringify(cont))
      this.msg = '书架为空，请添加小说或者关闭无痕浏览'
      this.bookList = []
    }
  },
  methods: {
    clearBook() {
      let cont = []
      localStorage.setItem('bookrackList', JSON.stringify(cont))
      this.msg = '书架为空，请添加小说或者关闭无痕浏览'
      this.bookList = []
    },
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped>
.bookrack {
  .wrapper {
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
    .block {
      text-indent: 10px;
      // background-color: #f1f3f4;
      width: 300px;
    }
    .block_img {
      height: auto;
      border: 0px;
      overflow: hidden;
      padding-top: 10px;
      padding-bottom: 10px;
      float: left;
      margin: 0 auto;
    }
    .block_txt {
      border: 0px;
      height: 100px;
      overflow: hidden;
      line-height: 20px;
      padding-top: 8px;
    }

    .block_txt h2 {
      font-size: 16px;
      height: auto;
    }
    .block_txt p {
      height: auto;
      font-size: 14px;
    }
  }
}
</style>
