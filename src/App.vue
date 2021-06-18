<template>
  <div id="app">
    <div id="nav">
      <MainTarBar></MainTarBar>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import MainTarBar from "./components/content/maintarbar/MainTarBar";
  export default {
    name:'app',
    components:{
      MainTarBar
    }
  }
</script>
<style>
  @import "./assets/css/base.css";
</style>
