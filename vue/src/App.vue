<template>
  <div id="app">
    <gt-header title="vue 组件" color="#fff" fontSize="32"></gt-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
body{
  background-color:#f5f5f5;
}
.box{
  padding:20px 60px;
}
@import '../static/font/iconfont.css';
@import '../themes/index.scss';
</style>
