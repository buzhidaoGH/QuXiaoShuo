<!-------- template -------->
<template>
  <div class="search">
    <!-- nav-bar导航栏 -->
    <nav-bar>
      <div slot="left">
        <!-- 返回历史上一页 -->
        <img
          src="~assets/img/back.svg"
          style="padding-top: 10px; margin-right: 10px;"
          width="35px"
          height="35px"
          @click="$router.go(-1)"
        />
      </div>
      <div slot="center">
        <input type="text" />
      </div>
      <div slot="right">
        <img
          src="~assets/img/search.svg"
          style="margin-top: 5px; margin-right: 10px;"
          width="35px"
          height="35px"
        />
      </div>
    </nav-bar>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li>内容1</li>
        <li>内容2</li>
        <li>内容3</li>
        <li>内容4</li>
        <li>内容5</li>
        <li>内容6</li>
        <li>内容7</li>
        <li>内容8</li>
        <li>内容9</li>
        <li>内容10</li>
        <li>内容11</li>
        <li>内容12</li>
        <li>内容13</li>
        <li>内容14</li>
        <li>内容15</li>
        <li>内容16</li>
        <li>内容17</li>
        <li>内容18</li>
        <li>内容19</li>
        <li>内容20</li>
        <li>内容21</li>
        <li>内容22</li>
        <li>内容23</li>
        <li>内容24</li>
        <li>内容25</li>
        <li>内容26</li>
        <li>内容27</li>
        <li>内容28</li>
        <li>内容29</li>
        <li>内容30</li>
        <li>内容31</li>
        <li>内容32</li>
        <li>内容33</li>
        <li>内容34</li>
        <li>内容35</li>
        <li>内容36</li>
        <li>内容37</li>
        <li>内容38</li>
        <li>内容39</li>
        <li>内容40</li>
        <li>内容41</li>
        <li>内容42</li>
        <li>内容43</li>
        <li>内容44</li>
        <li>内容45</li>
        <li>内容46</li>
        <li>内容47</li>
        <li>内容48</li>
        <li>内容49</li>
        <li>内容50</li>
      </ul>
    </div>
    测试复制
  </div>
</template>

<!--------- script --------->
<script>
import BScroll from 'better-scroll'
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Search',
  data() {
    //数据
    return {
      scroll: null,
    }
  },
  methods: {
    //方法
  },
  components: {
    //组件
    NavBar,
  },
  mounted() {
    this.scroll = new BScroll('.wrapper', {
      click: true,
      mouseWheel: true,
      // 上拉加载
      pullUpLoad: {
        // 当上拉距离超过30px时触发 pullingUp 事件
        threshold: -30, //默认是0px
      },
      // 下拉刷新
      pullDownRefresh: {
        // 下拉距离超过30px触发pullingDown事件
        threshold: 30,
        // 回弹停留在距离顶部20px的位置
        stop: 20,
      },
    })
    this.scroll.on('pullingUp', () => {
      console.log('处理上拉加载操作')
      setTimeout(() => {
        // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
        console.log('上拉加载完成')
        this.scroll.finishPullUp()
      }, 2000)
    })
    this.scroll.on('pullingDown', () => {
      console.log('处理下拉刷新操作')
      setTimeout(() => {
        console.log('下拉刷新完成')
        // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
        this.scroll.finishPullDown()
      }, 2000)
    })
  },
}
</script>

<!--------- style --------->
<style lang="less" scoped>
.search {
  position: relative;
  min-height: 100vh;
  z-index: 9;
  background-color: #fff;
  .wrapper {
    height: 150px;
    background-color: red;
    overflow: hidden;
  }
}
</style>
