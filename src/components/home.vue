<template>
<div>
    <h1>
      home
    </h1>
    <mt-swipe :auto="2000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>

    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <router-link to='/home/newslist'>
            <img :src="menu1">
          </router-link>
          <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to='/home/photolist'>
          <img :src="menu2">
          <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img :src="menu3">
          <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img :src="menu4">
          <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img :src="menu5">
          <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img :src="menu6">
          <div class="mui-media-body">联系我们</div></a></li>
      </ul> 
    </div>
</div>
</template>

<script>
import menu1 from '../assets/imgs/menu1.png'
import menu2 from '../assets/imgs/menu2.png'
import menu3 from '../assets/imgs/menu3.png'
import menu4 from '../assets/imgs/menu4.png'
import menu5 from '../assets/imgs/menu5.png'
import menu6 from '../assets/imgs/menu6.png'


export default {
  data() {
    return {
      menu1: menu1,
      menu2: menu2,
      menu3: menu3,
      menu4: menu4,
      menu5: menu5,
      menu6: menu6,
    }
  }
}
</script>


<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  butten

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: green;
    }
    &:nth-child(3) {
      background-color: blue;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: white;
  img {
    width: 60px;
    height: 60px
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  background-color: #fff;
  border: none
}

</style>