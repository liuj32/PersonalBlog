<template>
  <div id="container">
    <h1>{{ initData }}</h1>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data(){
    return {
      initData: 'Vue 开发环境初始化'
    }
  },
  mounted() {
    console.log('测试是否消除console, 在production模式下')
    console.log($("h1").html())
  },
}
</script>

<style >
  .container{
    color: red;
    transform: translateX(20);
  }
</style>