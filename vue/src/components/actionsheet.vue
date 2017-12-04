<template>
  <div>
    <div class="box">
      <gt-button type="success" @click="sheet1 = true">点击1</gt-button><br/>
      <gt-button type="success" @click="sheet2 = true">点击2</gt-button>
      <gt-actionsheet :actions="action1" v-model="sheet1"></gt-actionsheet>
      <gt-actionsheet :actions="action2" v-model="sheet2" cancel-text=""></gt-actionsheet>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sheet1: false,
        sheet2: false,
        action1: [
          {
            name: '数据1',
            method: this.handleFn
          },
          {
            name: '数据2'
          }
        ],
        action2: [
          {
            name: '数据1'
          },
          {
            name: '数据2'
          },
          {
            name: '返回上一步',
            method: this.goBack
          }
        ]
      };
    },
    methods: {
      handleFn () {
        console.log('执行数据1方法');
      },
      goBack () {
        this.$router.go(-1);
      }
    }
  };
</script>
