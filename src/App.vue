<template>
  <div id="app">
    <!--
      用了keep-alive 可以让元素一直存在而不被销毁，也就是当比如从首页跳到分类等别的页面，再返回首页的时候，还是停留在首页离开的地方
      -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <!--    <router-view/>-->
    <div id="nav">
      <MainTarBar></MainTarBar>
    </div>


  </div>
</template>
<script>
import MainTarBar from "./components/content/maintarbar/MainTarBar";

export default {
  name: 'app',
  components: {
    MainTarBar
  }
}
</script>
<style>
@import "./assets/css/base.css";
</style>
