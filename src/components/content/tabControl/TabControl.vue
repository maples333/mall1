<template>
  <div class="tabControl">
    <div class="tabControl-item" v-for="(item,index) in titles"
         :class="{active:index===currentIndex}"
         @click="tabClick(index)"
         :key="index">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},
  created() {
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style>
.tabControl {
  display: flex;
  text-align: center;
  font-size: 14px;
  position: sticky;
  top: 44px;
}

.tabControl-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>
