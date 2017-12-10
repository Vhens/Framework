<template>
  <span v-text="text" class="gt-badge" :class="classes"></span>
</template>
<script>
  export default {
    name: 'gtBadge',
    props: {
      text: [String, Number]
    },
    computed: {
      classes () {
        const res = {};
        res['gt-badge-dot'] = typeof this.text === 'undefined';
        res['gt-badge-single'] = typeof this.text !== 'undefined' && this.text.toString().length === 1;
        res['gt-badge-multi'] = typeof this.text !== 'undefined' && this.text.toString().length > 1;
        return res;
      }
    }
  }
</script>