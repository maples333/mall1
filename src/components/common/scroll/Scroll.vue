<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'
import PullDown from '@better-scroll/pull-down'
import ObserveImage from '@better-scroll/observe-image'

BScroll.use(ObserveImage)
BScroll.use(PullDown)
BScroll.use(ObserveDOM)
BScroll.use(Pullup)
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        pullUpLoad: true,
        observeDOM: true,
        click: true,
        observeImage: true
      })
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
        // console.log(position)
      })
      this.scroll.on('pullingUp', () => {
        // console.log(111)
        this.$emit('pullUp')
        // this.scroll.finishPullUp()
      })
      // console.log(this.scroll)
    })
  },
  methods: {
    // 可以把这个scrollTo封装成一个我们自己的方法，这样在父组件调用的时候，就不用scroll.scroll了，更加体现了封装的思想
    scrollTo(x, y, time = 800) {
      console.log(222)
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh() {
      // console.log(1)
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
