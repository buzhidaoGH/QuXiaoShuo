<!-------- template -------->
<template>
  <div class="homenavbar">
    <NavBar>
      <div slot="center">我的书城</div>
      <div slot="right">搜索</div>
    </NavBar>
  </div>
</template>

<!--------- script --------->
<script>
import NavBar from '../common/navbar/NavBar'
export default {
  name: 'HomeNavBar',
  components: {
    //组件
    NavBar,
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped>
</style>
