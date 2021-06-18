<template>
  <div>
    <NavBar class="home-nav">
      <div slot="center">
        购物街
      </div>
    </NavBar>
    <HomeSwiper :banner="banner"></HomeSwiper>
    <RecommendView :recommend="recommend"></RecommendView>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import {getHomeMultidata} from "../../network/home";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
export default {
  data() {
    return {
      banner: null,
      recommend:null
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      console.log(this.recommend)
    })
  },
  methods: {},
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  }
}
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
}
</style>
