<template>
  <div class="gt-line-spin-fade" :style="{
        width: spinnerSize,
        height: spinnerSize
      }">
    <div v-for="n in 8" class="spin" :class="[`spin${n}`]" :key="n" :style="{ backgroundColor: spinnerColor }"></div>
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
  .gt-line-spin-fade{
    position: relative;
    .spin{
      width: 4px;
      height: 8px;
      border-radius: 2px;
      margin: 2px;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      position: absolute;
      width: 2px;
      height: 8px;
    }
    // @for $i from 1 through 8 {
    //   .spin#{$i}{
    //     @if ($i % 2 ==0) {
    //       color: red;
    //     } @else {
    //       top: 8px;
    //       left: 0;
    //       animation: line-spin-fade-loader 1.2s 0.8s infinite ease-in-out;
    //     }
    //   }
    // }
    .spin1{
      top: 8px;
      left: 0;
      animation: line-spin-fade-loader 1.2s 0.8s infinite ease-in-out;
    }

    .spin2 {
      top: 6px;
      left: 6px;
      transform: rotate(-45deg);
      animation: line-spin-fade-loader 1.2s 0.24s infinite ease-in-out;
    }

    .spin3 {
      top: 0;
      left: 8px;
      transform: rotate(90deg);
      animation: line-spin-fade-loader 1.2s 0.36s infinite ease-in-out;
    }

    .spin4 {
      top: -6px;
      left: 6px;
      transform: rotate(45deg);
      animation: line-spin-fade-loader 1.2s 0.48s infinite ease-in-out;
    }

    .spin5 {
      top: -8px;
      left: 0;
      animation: line-spin-fade-loader 1.2s 0.6s infinite ease-in-out;
    }

    .spin6 {
      top: -6px;
      left: -6px;
      transform: rotate(-45deg);
      animation: line-spin-fade-loader 1.2s 0.72s infinite ease-in-out;
    }

    .spin7 {
      top: 0;
      left: -8px;
      transform: rotate(90deg);
      animation: line-spin-fade-loader 1.2s 0.84s infinite ease-in-out;
    }

    .spin8 {
      top: 6px;
      left: -6px;
      transform: rotate(45deg);
      animation: line-spin-fade-loader 1.2s 0.96s infinite ease-in-out;
    }
  }

   @keyframes line-spin-fade-loader {
      50% {
        opacity: 0.3;
      }
      60% {
        opacity: 1;
      }
    }
</style>

