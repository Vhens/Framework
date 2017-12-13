<template>
  <div class="box">
    <gt-button type="primary" @click="onAlert">alert</gt-button><br/>
    <gt-button type="warn" @click="onConfirm">confirm</gt-button><br/>
    <gt-button type="danger" @click="onPrompt">prompt</gt-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onAlert () {
        this.$message.alert('标题', '内容....');
      },
      onConfirm () {
        this.$message.confirm('标题', '内容....');
      },
      onPrompt () {
        this.$message.prompt('标题', ' ').then(({ value }) => {
          console.log(value);
        });
      }
    }
  };
</script>
