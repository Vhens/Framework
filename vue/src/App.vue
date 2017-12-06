<template>
  <div id="app">
    <gt-header :title="val" color="#fff" fontSize="32">
      <div slot="left" @click="goBack" v-if="show">
        <i class="gt gt-icon1-left icon-xiangzuojiantou"></i>
      </div>
    </gt-header>
   <div class="wapper" style="margin-top: 112px;">
      <router-view></router-view>
   </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      val: 'vue-组件',
      show: false
    };
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    }
  },
  watch: {
    $route (to) {
      this.show = to.name === 'index' ? 0 : 1;
      this.val = to.name === 'index' ? 'vue-组件' : `${to.name}-组件`;
    }
  }
};
</script>

<style lang="scss">
body{
  background-color:#f5f5f5;
}
#app{
  max-width: 640px;
  margin: 0 auto;
}
.box{
  padding:20px 60px;
}
.gt-icon1-left{
  font-size: 18px;
  font-weight:bold;
}
@import '../static/font/iconfont.css';
@import '../themes/index.scss';
</style>
