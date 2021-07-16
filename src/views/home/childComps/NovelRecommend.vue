<!-------- template -------->
<template>
  <div class="novel-ranking">
    <div v-for="novel in novelRec" :key="novel.novelkey" class="block">
      <div class="block_img">
        <img height="100" width="80" :src="novel.image" />
      </div>
      <div class="block_txt">
        <h2>[{{ novel.category.substring(0, 2) }}]{{ novel.title }}</h2>
        <p></p>
        <p>作者：{{ novel.author }}</p>
        <p>{{ novel.description | ellipsis }}</p>
      </div>
      <div style="clear: both;"></div>
    </div>
  </div>
</template>

<!--------- script --------->
<script>
export default {
  name: 'NovelRanking',
  data() {
    //数据
    return {}
  },
  props: {
    novelRec: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  filters: {
    ellipsis(value) {
      if (!value) return '暂无简介'
      value = value.replace(/<br\/>/g, '')
      if (value.length > 30) {
        return value.slice(0, 30) + '...'
      }
      return value
    },
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped>
.block {
  text-indent: 10px;
}
.block_img {
  height: auto;
  border: 0px;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 10px;
  float: left;
}
.block_img2 {
  height: auto;
  border: 1px solid #dedede;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 5px;
  padding-right: 10px;
  float: left;
}
.block_txt {
  border: 0px;
  height: 100px;
  overflow: hidden;
  line-height: 20px;
  padding-top: 8px;
}
.block_txt2 {
  border: 0px;
  height: 120px;
  overflow: hidden;
  line-height: 20px;
}

.block_txt h2,
.block_txt2 h2 {
  font-size: 16px;
  height: auto;
}
.block_txt p,
.block_txt2 p {
  height: auto;
  font-size: 14px;
}
</style>
