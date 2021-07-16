<!-------- template -------->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<!--------- script --------->
<script>
export default {
  name: 'NavBar',
}
</script>

<!--------- style --------->
<style lang="less" scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
  background-color: #1387F4;
}
</style>
