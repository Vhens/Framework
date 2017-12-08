<template>
  <button :class="'gt-slide-out-button gt-slide-out-button-' + type" @click="handleClick"><slot></slot></button>
</template>

<script>
  export default {
    name: 'gt-slide-button',
    props: {
      type: {
        type: String,
        default: 'default'
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>
