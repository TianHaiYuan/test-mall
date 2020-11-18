<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      @tabClick="tabClick"
      class="tab-control"
      :titles="['流行', '新款', '精选']"
    ></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    <div style="height: 500px"><p>dsaaaaaaaaaaaa</p></div>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from 'components/content/goods/GoodsList'

import { getHomeMultidata, getHomeGoods } from "network/home";

// import SWipper from 'components/common/swopper/Swiper'
// import SwipperItem from 'components/common/swopper/SwiperItem'

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType:'pop'
    };
  },
  computed:{
      showGoods(){
       return this.goods[this.currentType].list
      }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {

    /*
    事件监听相关方法
     */
    tabClick(index){
     switch (index) {
       case 0:
         this.currentType='pop'
         break;
      case 1:
         this.currentType='new'
         break;
          case 2:
         this.currentType='sell'
         break;
     }
    },
    
    /*
    网络请求相关方法
    */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        //this.result=res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page+=1;
    });
    }
  }
  
};
</script>
<style scoped>
/* @import url(); 引入css类 */
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;

  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>