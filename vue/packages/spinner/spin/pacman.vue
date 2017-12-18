<template>
  <div class="gt-pacman" :style="{
        width: spinnerSize,
        height: spinnerSize
      }">
    <div v-for="n in 5" class="spin" :class="[`spin${n}`]" :key="n"></div>
  </div>
</template>

<script>
import common from '../common';
export default {
  name: 'gtPacman',
  mixins: [common]
};
</script>
<style lang="scss">
.gt-pacman {
  position: relative;
  @for $i from 1 through 4 {
    .spin#{$i + 1} {
      animation: pacman-balls 1s 0.33s * ($i - 1) infinite linear;
    }
  }
  .spin1,
  .spin2 {
    width: 0px;
    height: 0px;
    border-right: 20px solid transparent;
    border-top: 20px solid #26a2ff;
    border-left: 20px solid #26a2ff;
    border-bottom: 20px solid #26a2ff;
    border-radius: 20px;
  }
  .spin1 {
    animation: rotate_pacman_half_up 0.5s 0s infinite;
  }
  .spin2 {
    animation: rotate_pacman_half_down 0.5s 0s infinite;
    margin-top: -40px;
  }
  .spin3,
  .spin4,
  .spin5,
  .spin6 {
    background-color: #26a2ff;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    position: absolute;
    transform: translate(0, -6.2px);
    top: 20px;
    left: 100px;
  }
}

@keyframes rotate_pacman_half_up {
  0% {
    transform: rotate(270deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

@keyframes rotate_pacman_half_down {
  0% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
@keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }
  100% {
    transform: translate(-100px, -6.2px);
  }
}
</style>

