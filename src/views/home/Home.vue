<template>
  <div class="home">
    <NavBar class="home-nav">
      <div slot="center">
        购物街
      </div>
    </NavBar>
    <Scroll @pullUp="pullUp" @scroll="appear" class="content" ref="scroll" :probe-type="3">
      <HomeSwiper :banner="banner"></HomeSwiper>
      <RecommendView :recommend="recommend"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl @tabClick="tabClick" class="tabBar" :titles="['流行','新款','精选']"></TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>
    <BackTop :disable="isAppear" @click.native="backTopClick"></BackTop>
    ccc
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "../../components/common/navbar/NavBar";
import Scroll from "../../components/common/scroll/Scroll";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import BackTop from "../../components/content/backTop/BackTop";

import {getHomeMultidata} from "../../network/home";
import {getHomeGoods} from "../../network/home";

export default {
  data() {
    return {
      banner: null,
      recommend: null,
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      isAppear: false
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    // console.log(this.goods)
  },
  methods: {
    /*
    * 监听事件相关方法
    * */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    appear(position) {
      this.isAppear = position.y < -1000;
    },
    pullUp(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
      this.$refs.scroll.scroll.refresh()
    },
    /*
    * 网络请求相关代码
    * */
    // 获得具体商品列表
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
      })

    },
    // 获得分类列表
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  }
}
</script>

<style scoped>
.home {
  /*padding-top: 44px;*/
  /*viewport height 视口高度*/
  position: relative;
  height: 100vh;
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

.tabBar {
  z-index: 9;
  background-color: white;

}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  /*height: calc(100% - 93px);*/
  overflow: hidden;
  /*margin-top: 44px;*/
}
</style>
