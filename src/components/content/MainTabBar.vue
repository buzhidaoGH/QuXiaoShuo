<template>
  <tab-bar>
    <tab-bar-item path="/bookrack" activeColor="#1387F4">
      <img slot="item-icon" src="~assets/img/tabbar/bookrack.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/bookrack_active.svg" alt="">
      <div slot="item-text">书架</div>
    </tab-bar-item>
    <tab-bar-item path="/home" activeColor="#1387F4">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">书城</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#1387F4">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#1387F4">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
