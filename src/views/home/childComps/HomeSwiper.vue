<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image">
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
    }
  },
  props:{
    banner:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components:{
    SwiperItem,
    Swiper
  },
  created() {
  },
  methods: {}
}
</script>

<style>

</style>
