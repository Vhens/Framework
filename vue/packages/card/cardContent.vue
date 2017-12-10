<template>
  <div class="gt-card-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'gtCardContent',
    props:{
      imgUrl: String
    }
  };
</script>