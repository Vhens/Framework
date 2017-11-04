<template>
  <div class="hello">
    <gt-bar title="标题" titleClass="red" fontSize="32" color="#666">
        <gt-icon slot="left" icon="xiangzuojiantou" fontSize="40"></gt-icon>
        <gt-icon slot="right" icon="add" fontSize="60"></gt-icon>
    </gt-bar>
    <gt-counter color="red" prefix="$"></gt-counter>
    <gt-switch></gt-switch>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      value: false
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
