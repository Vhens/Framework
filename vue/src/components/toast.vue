<template>
  <div>
    <div class="box">
      <gt-button type="success" @click ="handleToastTop">点击提示top</gt-button><br/>
      <gt-button type="success" @click ="handleToast">点击提示middle</gt-button><br/>
      <gt-button type="success" @click.native ="handleToastBottom">点击提示bottom</gt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    methods: {
      handleToastTop() {
        this.$toast({
          message: '加载中...',
          position: 'top'
        });
      },
      handleToast() {
        this.$toast('加载中...');
      },
      handleToastBottom() {
        this.$toast({
          message: '加载中...',
          position: 'bottom'
        });
      }
    }
  };
</script>
