<template>
  <div class="good-list">
    <GoodsListItem v-for="(item,value) in goods" :goods="item" :key="value">
    </GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: 'GoodsList',
  data() {
    return {}
  },
  components: {
    GoodsListItem
  },
  props: {
    goods: {
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

<style>
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--color-background);

  padding: 2px;
}
</style>
