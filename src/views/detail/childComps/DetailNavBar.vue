<template>
  <div>
    <NavBar>
      <div @click="backClick" slot="left" class="back">
        <img src="~assets/images/common/back.svg">
      </div>
      <div class="title" slot="center">
        <div class="title-item" v-for="(item,index) in titles" :class="{active:currentIndex===index}"
             @click="titleClick(index)">
          {{ item }}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";

export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐',],
      currentIndex: 0,
    }
  },
  components: {
    NavBar
  },
  props: {},
  created() {
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backClick(){
      // 下面这两个方法一个效果
      this.$router.back()
      // this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
}

.title-item {
  flex: 1;
  font-size: 13px;
}

.active {
  color: var(--color-tint);
}
.back img{
  margin-top: 10px;
}
</style>
