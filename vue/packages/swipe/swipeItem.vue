<template>
  <div class="gt-swipe-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'gtSwipeItem',
    mounted () {
      this.$parent && this.$parent.swipeItemCreated(this)
    },
    destroyed () {
      this.$parent && this.$parent.swipeItemDestroyed(this)
    }
  }
</script>
