<template>
  <div class="box">
    <gt-button type="primary" @click="popupMiddle=true" ref="button">点击middle</gt-button><br/>
    <gt-popup v-model="popupMiddle" popup-transition="gt-popup-fade" position="middle" :style="{ top: btnBottom + 10 + 'px' }">
      <h1>popup</h1>
      <p>asfdfds</p>
      <p>dsfertr45654</p>
      <p>dfdfdfdff</p>
    </gt-popup>

    <gt-button type="info" @click="popupTop = true">点击top</gt-button><br/>
    <gt-popup v-model="popupTop" position="top" class="gt-popup-top" :modal="false">
      <p>更新成功</p>
    </gt-popup>

    <gt-button type="success" @click="popupRight = true">点击right</gt-button> <br/>
    <gt-popup v-model="popupRight" position="right" :modal="false">
      <gt-button type="primary" @click="popupRight = false" style="margin-top: 360px;">点击关闭right</gt-button>
    </gt-popup>

    <gt-button type="danger" @click ="popupBottom = true">点击bottom</gt-button> <br/>
    <gt-popup v-model="popupBottom" position="bottom">
      <div class="content">
        <p>列表1</p>
        <p>列表2</p>
        <p>列表3</p>
        <p>列表4</p>
      </div>
    </gt-popup>

    <gt-button type="success" @click="popupLeft = true">点击left</gt-button> <br/>
    <gt-popup v-model="popupLeft" position="left" :modal="false">
      <gt-button type="primary" @click="popupLeft = false" style="margin-top: 360px;">点击关闭right</gt-button>
    </gt-popup>
  </div>
</template>

<script>
  export default {
    name: 'popup',
    data () {
      return {
        popupMiddle: false,
        popupTop: false,
        popupRight: false,
        popupBottom: false,
        popupLeft: false,
        btnBottom: 0
      };
    },
    mounted () {
      this.btnBottom = this.$refs.button.$el.getBoundingClientRect().bottom;
    },
    watch: {
      popupTop (val) {
        if (val) {
          setTimeout(() => {
            this.popupTop = false;
          }, 3000);
        }
      }
    },
  };
</script>

<style lang="scss">
  .content{
    padding:20px;
    height:240px;
    p{
      padding: 10px;
    }
  }
</style>
