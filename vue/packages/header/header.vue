<template>
  <section class="gt-header">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="gt-header-title" :style="{'font-size': fontSize,'color': color}">
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
    name: 'gtHeader',
    props: {
      title: {
        type: [String, Object],
        default: ' '
      },
      fontSize:{
        type: String
      },
      color: {
        type: String
      }
    }
  }
</script>
