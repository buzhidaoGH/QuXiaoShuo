<!-------- template -------->
<template>
  <div class="novel-ranking">
    <div v-for="novel in novelList" :key="novel.novelkey" class="block">
      <router-link :to="'/novelInfo/'+novel.novelkey">
        <img
          onerror="javascript:this.src='http://m.biquge.tv/style/noimg.jpg'"
          :src="novel.image"
          height="100"
          width="80"
        />
        <div class="block-right">
          <p>[{{ novel.category.substring(0, 2) }}]</p>
          <p>{{ novel.title }}</p>
          <p>作者：{{ novel.author }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<!--------- script --------->
<script>
export default {
  name: 'NovelRanking',
  props: {
    novelList: {
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
.novel-ranking {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .block {
    width: 44%;
    height: 100px;
    float: left;
    margin-bottom: 5px;
    margin-top: 5px;
    margin-left: 15px;
    img {
      float: left;
    }
    font-size: 14px;
    font-family: '宋体';
    .block-right {
      float: left;
      height: 100px;
      width: 45%;
      p {
        line-height: 18px;
      }
    }
  }
}
</style>
