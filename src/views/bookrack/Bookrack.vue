<!-------- template -------->
<template>
  <div class="bookrack">
    <NavBar><div slot="center">我的书架</div></NavBar>
  </div>
</template>

<!--------- script --------->
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Bookrack',
  data() {
    //数据
    return {}
  },
  methods: {
    //方法
  },
  components: {
    //组件
    NavBar,
  },
  computed: {
    //计算属性
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped></style>
