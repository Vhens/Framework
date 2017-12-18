<template>
  <div id="app" class="container">
    <gt-header :title="val" color="#fff" fontSize="32" class="head">
      <div slot="left" @click="goBack" v-if="show">
        <i class="gt gt-icon1-left icon-xiangzuojiantou"></i>
      </div>
    </gt-header>
   <div class="wapper">
      <router-view transition="slide" keep-alive></router-view>
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
.container{
  height:100vh;
  display:flex;
  flex-direction:column;
}
.head{
  flex:0 0 auto
}
.wapper{
  margin-top: 60px;
  flex:1 1 auto
}
.box{
  padding:20px 60px;
}
.gt-icon1-left{
  font-size: 18px;
  font-weight:bold;
}
.slide-transition {
  transition-duration: .3s;
  width: 100%;
}
.slide-enter, .slide-leave {
  transform: translate3d(100%, 0, 0);
  overflow: hidden;
}
@import '../static/font/iconfont.css';
@import '../themes/index.scss';
</style>
