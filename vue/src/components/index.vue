<template>
  <div class="hello">
    <gt-bar title="vue 组件" color="#fff" fontSize="32">
    </gt-bar>
    <gt-grid>
      <gt-grid-item to="dddd">
        <gt-icon icon="add" slot="icon" fontSize="50"></gt-icon>
        <span slot="label">ddddd</span>
      </gt-grid-item>
    </gt-grid>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    };
  },
  mounted () {
    console.log(this.toast);
    this.toast('success');
  }
};
</script>

