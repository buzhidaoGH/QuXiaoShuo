<!-------- template -------->
<template>
  <div class="tab-control">
    <ul>
      <li
        v-for="(item, index) in titles"
        class="tab-control-item"
        :class="{ active: index === currentIndex }"
        @click="itemClick(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<!--------- script --------->
<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
      /* //切换路径
      this.$router.replace("/category/"+index).catch((err) => {}) */
    },
  },
}
</script>
<!--------- style --------->
<style lang="less" scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  ul,
  li {
    width: 100%;
  }
}
.active {
  // color: var(--color-high-text);
  background-color: #e0e0e0;
  font-weight: bold;
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>
