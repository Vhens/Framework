<template>
  <div class="gt-ball-scale-multiple" :style="{
        width: spinnerSize,
        height: spinnerSize
      }">
    <div v-for="n in 3" class="spin" :class="[`spin${n}`]" :key="n" :style="{ backgroundColor: spinnerColor }"></div>
  </div>
</template>

<script>
import common from '../common';
export default {
  name: 'gtLoadingCircle',
  mixins: [common]
};
</script>
<style lang="scss">
  .gt-ball-scale-multiple{
      position: relative;
      transform: translateY(-30px);
    .spin{
      position: absolute;
      left: 0px;
      top: 0px;
      opacity: 0;
      margin: 0;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      margin: 2px;
      animation-fill-mode: both;
      animation: ball-scale-multiple 1s 0s linear infinite;
    }
    @for $i from 1 through 3 {
      .spin#{$i+1} {
        animation-delay: 0.2s  * $i;
       }
    }
  }
  @keyframes ball-scale-multiple {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      5% {
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
</style>

