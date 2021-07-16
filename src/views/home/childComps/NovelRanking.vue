<!-------- template -------->
<template>
  <div class="novel-ranking">
    <ul>
      <li v-for="novel in novelList" :key="novel.novelkey" class="block">
        <img :src="novel.image" height="100" width="80" />
        <div class="block-right">
          <p>[{{ novel.category.substring(0, 2) }}]</p>
          <p>{{ novel.title }}</p>
          <p>作者：{{ novel.author }}</p>
        </div>
      </li>
    </ul>
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
  ul {
    list-style: none; //去掉标签默认的左边符号
    li {
      list-style-type: none; //去掉标签默认的左边符号
    }
  }
  .block {
    width: 45%;
    float: left;
    margin-bottom: 5px;
    margin-top: 5px;
    margin-left: 15px;
    img{
      float: left;
    }
    font-size: 14px;
    font-family: '宋体';
  }
}
</style>
