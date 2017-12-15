<template>
  <div class="box1">
    <gt-slide-out title="左滑删除操作" value="提示..." is-link>
      <gt-slide-out-button type="warn" slot="right" @click="handleDel">删除</gt-slide-out-button>
      <gt-slide-out-button type="default" slot="right">收藏</gt-slide-out-button>
    </gt-slide-out>

    <gt-slide-out title="图标按钮">
      <gt-slide-out-button type="warn" slot="right">
        <i class="gt icon-lajixiang"></i>
      </gt-slide-out-button>
      <gt-slide-out-button type="primary" slot="right">
        <i class="gt icon-collection"></i>
      </gt-slide-out-button>
    </gt-slide-out>
  </div>
</template>

<script>
  export default {
    methods: {
      handleDel () {
        console.log('del');
      },
      close () {

      }
    }
  };
</script>

<style lang="scss" scoped>
  .box1 {
    .icon-lajixiang, .icon-collection{
      font-size: 20px;
    }
  }
</style>
