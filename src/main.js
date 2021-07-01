import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 另一种方法可以用Vuex来定义全局变量，然后来监听这个变量的变化
// 通过下面这个方法来定义事件总线
Vue.prototype.$bus = new Vue()
// 通过this.$bus.$emit 来发射事件
// 通过this.$bus.$on 来接收事件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
