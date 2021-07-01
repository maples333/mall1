<template>
  <div class="home">
    <NavBar class="home-nav">
      <div slot="center">
        购物街
      </div>

    </NavBar>
    <TabControl v-show="isPositionFixed" ref="tabControl1" @tabClick="tabClick" class="tabBar"
                :titles="['流行','新款','精选']"></TabControl>
    <Scroll @pullUp="pullUp" @scroll="appear" class="content" ref="scroll" :probe-type="3">
      <HomeSwiper @swiperImageLoad="swiperImageLoad" :banner="banner"></HomeSwiper>
      <RecommendView :recommend="recommend"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl ref="tabControl2" @tabClick="tabClick"
                  :titles="['流行','新款','精选']"></TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>
    <BackTop :disable="isAppear" @click.native="backTopClick"></BackTop>
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

import {debounce} from "../../common/utils";

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
      isAppear: false,
      // 流行，新款，精选导航条距离顶部的高度
      tabOffsetTop: 0,
      isPositionFixed: false,
      // 保存离开的时候的Y的位置
      saveY: 0
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    appear(position) {
      this.isAppear = position.y < -1000;

      this.isPositionFixed = (-position.y) > this.tabOffsetTop
    },
    pullUp() {
      // 现在选中的类型，流行、新款、精选的类型，去请求不同页面的数据
      this.getHomeGoods(this.currentType)
      // 完成了上拉加载更多
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
    },
    // 当轮播图加载完，页面被撑开后，获取流行、精选导航条的距离上面的高度
    swiperImageLoad() {
      // $el 用于拿到组件内的元素
      // console.log(this.$refs.tabControl.$el.offsetTop);
      // console.log(this.$refs.tabControl.$el);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop

    }
  },
  activated() {
    // this.backTopClick()
    // this.$refs.scroll.scrollTo(0, 0)
    this.$refs.scroll.refresh()
    // setTimeout(()=>{},100)
    // console.log(this.saveY)

    // 按理说是应该要有下面的方法的，但是写了就报错，错的莫名其妙
    // this.$refs.scroll.scrollTo(0, this.saveY, 1)

  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  },
  destroyed() {
    console.log('home被销毁')
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on('imgLoad', () => {
      refresh()
    })
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
  margin-bottom: -44px;
  /*bottom: -10px;*/
  /*position: absolute;*/
  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*z-index: 9;*/
}

.tabBar {
  z-index: 9;
  position: relative;
  background-color: #ffffff;
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

.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}

</style>
