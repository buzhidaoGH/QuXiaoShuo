<!-------- template -------->
<template>
  <div class="homenavbar">
    <NavBar>
      <div slot="center">我的书城</div>
      <div slot="right">
        <img
          src="~assets/img/search.svg"
          style="margin-top: 5px; margin-right: 10px;"
          width="35px"
          height="35px"
          @click="itemClick"
        />
      </div>
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
  methods: {
    itemClick(){
      this.$router.push('search');
    }
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped></style>
