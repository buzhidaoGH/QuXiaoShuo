<!-------- template -------->
<template>
  <div class="bookrack">
    <nav-bar>
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
    {{ bookrackList }}
  </div>
</template>

<!--------- script --------->
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Bookrack',
  data() {
    //数据
    return {
      bookrackList: [], //通过key来获取value解析数据
      bookList: [], //记录书的key
    }
  },
  components: {
    //组件
    NavBar,
  },
  created() {
    // console.log('创建对象')
    // if (localStorage.length > 0) {
    //   for (var i = 0; i < localStorage.length; i++) {
    //     // 获取key 索引从0开始
    //     var getKey = localStorage.key(i)
    //     // 获取key对应的值
    //     var getVal = localStorage.getItem(getKey)
    //     // 放进数组
    //     this.bookrackList[i] = getVal
    //   }
    // } else {
    //   console.log('无数据')
    // }
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped></style>
