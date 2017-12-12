<template>
  <div class="box1">
    <div v-for="(item, index) in list" class="img">
      <img class="lightbox-img" :src="item.src" @click="show(index)">
    </div>
    <gt-lightbox :list="list" ref="lightBox" :options="options"></gt-lightbox>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513069112645&di=1624ec74fa34d6793c7f5d63298c7570&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F42%2F25%2F02bOOOPIC95_1024.jpg'
        },
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513069112647&di=a98a5b117a55a4386edb627b8f5e9c7f&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fa1%2F95%2Fd%2F105.jpg'
        }, {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513069112647&di=936d058358491d5f4b78139281ed1999&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F140313%2F330457-14031320362254.jpg'
        }],
        options: {
          getThumbBoundsFn(index) {
            const thumbnail = document.querySelectorAll('.lightbox-img')[index];
            const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
            const rect = thumbnail.getBoundingClientRect();
            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
          }
        }
      };
    },
    methods: {
      show (index) {
        this.$refs.lightBox.show(index);
      }
    }
  };
</script>

<style lang="scss">
  .img{
    display: inline-block;
    width:100px;
    height:100px;
    margin: 100px 5px;
    img{
      width: 100%;
    }
  }
</style>
