<template>
  <div @click="itemClick" class="goods-item">
    <img @load="imgLoad" class="img" :src="showImage">
    <div class="goods-info">
      <p>{{ goods.title }}</p>
      <span class="price">{{ goods.price }}</span>
      <span class="collect">{{ goods.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  data() {
    return {}
  },
  components: {},
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    // console.log(this.goods)
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoad')
    },
    itemClick() {
      this.$router.push('/detail/' + this.goods.iid)
    }
  },
  computed:{
    showImage()
    {
      return this.goods.image || this.goods.show.img
    }
  }
}
</script>

<style>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
  border: 3px solid var(--color-tint);
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
}
</style>
