<template>
  <div v-show="disable" class="back-top">
    <a href="#">
      <img src="~/assets/images/common/top.png">
    </a>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data() {
    return {}
  },
  components: {},
  props: {
    disable: {
      type: Boolean,
      default: false
    }
  },
  created() {
  },
  methods: {},
  computed: {
  }
}
</script>

<style scoped>
.back-top {
  position: fixed;
  bottom: 50px;
  right: 20px;
}

.back-top img {
  height: 43px;
}
</style>
