<template>
  <div>
    <gt-swipe :height="320" :auto="3000">
      <gt-swipe-item class="swipe-item" v-for="item of swipeList" :key="item">
        <img :src="item" alt="">
      </gt-swipe-item>
    </gt-swipe>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        swipeList: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513244225635&di=7f5460a11e332470ae28bec901ab2ed5&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F66%2F84%2F01c58PIC6uk_1024.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513244225955&di=b5b169d7ccccfab107889f3eec523a93&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F18%2F41%2F81%2F5570f511ecb79_1024.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513244225954&di=79d9825b3bf5d93f42063d69ef5fa715&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F09%2F64%2F46bOOOPICf5_1024.jpg'
        ]
      };
    }
  };
</script>

<style lang="scss">
  .swipe-item{
    img{
      display:block;
      width: 100%;
      height:100%;
    }
  }
</style>
