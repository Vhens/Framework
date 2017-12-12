<template>
  <div class="box1">
    <div class="item">
      <gt-textarea :max="20" placeholder="随便写..." @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></gt-textarea>
    </div>
    <div class="item">
      <gt-textarea :max="200" name="description" placeholder="随便写..."></gt-textarea>
    </div>
    <div class="item">
      <gt-textarea :max="200" name="detail" placeholder="随便写..." :show-counter="false"></gt-textarea>
    </div>
    <div class="item">
      <gt-textarea title="标题" placeholder="随便写..." :show-counter="false" :rows="1" autosize></gt-textarea>
    </div>
    <div class="item">
       <gt-textarea title="标题" :max="200" placeholder="随便写..." :show-counter="false" :height="200" :rows="8" :cols="30"></gt-textarea>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onEvent (e) {
      console.log('on', e);
    }
  }
};
</script>

<style lang="scss">
  .item{
    width:100%;
    background-color:#fff;
    margin-top: 20px;
  }
</style>
