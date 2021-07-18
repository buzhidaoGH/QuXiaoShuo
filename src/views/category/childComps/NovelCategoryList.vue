<!-------- template -------->
<template>
  <div class="novelcategory">
    <div v-for="novel in novelList" :key="novel.novelkey" class="block">
      <router-link :to="'/novelInfo/' + novel.novelkey">
        <div class="block_img">
          <img
            @load="imageLoad"
            height="100"
            width="80"
            src="http://m.biquge.tv/style/noimg.jpg"
            onerror="javascript:this.src='http://m.biquge.tv/style/noimg.jpg'"
          />
        </div>
        <div class="block_txt">
          <h2>{{ novel.title }}</h2>
          <p>[{{ novel.category.substring(0, 2) }}] | {{ novel.author }}</p>
          <p>{{ novel.description | ellipsis }}</p>
        </div>
      </router-link>
      <div style="clear: both;"></div>
    </div>
  </div>
</template>

<!--------- script --------->
<script>
//钩子函数;filters:过滤器;watch:监听;props:父传子;不用data属性:容易污染;
export default {
  name: 'NovelCategory',
  props: {
    novelList: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  methods: {
    imageLoad() {
      //事件总线$bus,反射事件
      this.$bus.$emit('novelImageLoad')
      // console.log("图片加载完成");
    },
  },
  filters: {
    ellipsis(value) {
      if (!value) return '暂无简介'
      value = value.replace(/<br\/>/g, '')
      if (value.length > 20) {
        return value.slice(0, 30) + '...'
      }
      return value
    },
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped>
.novel-ranking {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.block {
  // background-color: #f1f3f4;
  width: 100%;
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
  line-height: 20px;
  padding-top: 8px;
}
.block_txt h2 {
  font-size: 14px;
  height: auto;
}
.block_txt p {
  height: auto;
  font-size: 12px;
}
</style>
