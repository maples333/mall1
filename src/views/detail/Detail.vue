<template>
  <div id="detail" >
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo @imgLoad="imgLoad" :detail-info="detailImage"></DetailGoodsInfo>
      <DetailParamInfo :param-info="paramInfo"></DetailParamInfo>
      <DetailCommentInfo :comment-info="commentInfo"></DetailCommentInfo>
<!--      <RecommendView :recommend="recommendInfo"></RecommendView>-->
      <GoodsList :goods="recommendInfo"></GoodsList>
    </scroll>
  </div>
</template>

<script>

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import RecommendView from "../home/childComps/RecommendView";

import Scroll from "../../components/common/scroll/Scroll";
import GoodsList from "../../components/content/goods/GoodsList";

import {getDetail, Goods, Shop,Param,getRecommend} from "../../network/detail";

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailImage:{},
      paramInfo: {},
      commentInfo: [],
      recommendInfo: [],
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    RecommendView,
    GoodsList,
  },
  props: {},
  created() {
    // console.log(2)
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages
      console.log(res)
      const data = res.result
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailImage = data.detailInfo
      //5.获取参数信息
      this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule)
      //6.获取评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list
      }
    })
    getRecommend().then(res=>{
      this.recommendInfo = res.data.list
      // console.log(res)
      // console.log(this.recommendInfo)
    })
  },
  methods: {
    imgLoad(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 12;
  background-color: #fff;
  height: 100vh;
}

.content {
  height: calc(100% - 44px);
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>
