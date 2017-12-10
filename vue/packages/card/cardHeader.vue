<template>
  <div class="gt-card-header">
    <div class="gt-card-header-item" v-if="$slots.left">
        <slot name="left"></slot>
    </div>
    <div class="gt-card-header-item" v-if="$slots.right">
       <slot name="right"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'gtCardHeader'
  }
</script>