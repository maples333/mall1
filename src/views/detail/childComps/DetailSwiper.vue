<template>
  <swiper class="detail-swiper">
    <SwiperItem v-for="(item) in topImages">
      <!--    load  监听图片加载完成      -->
      <img :src="item">
    </SwiperItem>
  </swiper>
</template>

<script>
import Swiper from "../../../components/common/swiper/Swiper";
import SwiperItem from "../../../components/common/swiper/SwiperItem";

export default {
  name: 'DetailSwiper',
  data() {
    return {}
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
