<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
      <a :href="recommend.link">
        <img :src="item.image">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},
  created() {
  },
  methods: {}
}
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px #eee solid;
}

.recommend-item {
  flex: 1
}
.recommend-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>
