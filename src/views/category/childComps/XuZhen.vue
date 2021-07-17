<!-------- template -------->
<template>
  <div class="xuzhen">
    <novel-category :id="2"></novel-category>
  </div>
</template>

<!--------- script --------->
<script>
//钩子函数;filters:过滤器;watch:监听;props:父传子;不用data属性:容易污染;
import NovelCategory from './NovelCategory';
export default {
  name: 'Xuzhen',
  components: {//组件
    NovelCategory
  },
  data() {//数据
    return {}
  },
  methods: {//方法
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped>
  .xuanhuan{
    height: 100%;
  }
</style>