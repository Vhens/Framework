<template>
  <i class="iconfont" :class="getIcon" :style="{'font-size': getSize}"></i>
</template>

<script>
  import { addClass } from '../../../utils/dom'
  export default {
    name: 'gtIcon',
    props: {
      icon: {
        type: String,
        default: ' '
      },
      fontSize: {
        type: String
      }
    },
    computed: {
      getIcon () {
        return `icon-${this.icon}`;
      },
      getSize () {
        return `${this.fontSize}px`;
      }
    }
  }
</script>