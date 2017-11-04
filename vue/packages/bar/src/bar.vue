<template>
  <section class="gt-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="gt-bar-title" :class="titleClass" :style="{'font-size': getSize,'color': color}">
      <slot>
        <span>{{title}}</span>
      </slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'gtBar',
    props: {
      title: {
        type: String,
        default: ' '
      },
      titleClass: {
        type: [String, Array, Object]
      },
      fontSize:{
        type: String
      },
      color: {
        type: String
      }
    },
    computed: {
      getSize () {
        return `${this.fontSize}px`;
      }
    }
  }
</script>