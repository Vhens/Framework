<template>
  <i class="gt" :class="getIcon" :style="{'font-size': getSize}"></i>
</template>

<script>
  import { addClass } from '../../utils/dom'
  export default {
    name: 'gtIcon',
    props: {
      icon: {
        type: String,
        default: ' '
      },
      size: {
        type: String
      }
    },
    computed: {
      getIcon () {
        return `icon-${this.icon}`;
      },
      getSize () {
        return `${this.size}px`;
      }
    }
  }
</script>
