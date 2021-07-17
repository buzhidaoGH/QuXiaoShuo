<!-------- template -------->
<template>
  <div class="allcategory">
    <div
      class="allcategory-title"
      v-for="(title, index) in titles"
      :key="index"
      :style="note"
    >
      <p>{{ title }}</p>
      <p>{{ totalList[index] }} 本</p>
    </div>
  </div>
</template>

<!--------- script --------->
<script>
import { getCategoryNumber } from '@/network/category.js'
//钩子函数;filters:过滤器;watch:监听;props:父传子;不用data属性:容易污染;
export default {
  name: 'AllCategory',
  components: {
    //组件
  },
  data() {
    //数据
    return {
      titles: [
        '玄幻小说',
        '修真小说',
        '都市小说',
        '穿越小说',
        '网游小说',
        '科幻小说',
        '其他小说',
      ],
      note: {
        backgroundImage: 'url(' + require('assets/img/cardtab.jpg') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      },
      totalList: [],
    }
  },
  created() {
    getCategoryNumber().then((res) => {
      this.totalList = res
    })
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped>
.allcategory {
  // background-color: blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .allcategory-title {
    margin-top: 15px;
    height: 50px;
    line-height: 50px;
    text-indent: 10px;
    width: 45%;
    border-radius: 10px;
    p {
      height: 20px;
      line-height: 30px;
    }
  }
}
</style>
