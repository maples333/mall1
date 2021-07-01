<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
<!--    load  监听图片加载完成      -->
          <img :src="item.image" @load="imageLoad">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from "../../../components/common/swiper/index"

export default {
  data() {
    return {
      isImageLoad: false
    }
  },
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    SwiperItem,
    Swiper
  },
  created() {
  },
  methods: {
    imageLoad() {
      if (!this.isImageLoad) {
        this.$emit('swiperImageLoad')
        this.isImageLoad = !this.isImageLoad
      }
    }
  }
}
</script>

<style>

</style>
