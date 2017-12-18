<template>
  <div class="gt-spinner">
    <component :is="spinner"></component>
  </div>
</template>

<script>
  import common from './common';
  import gtLineSpinFade from './spin/line-spin-fade';
  import gtBallScaleMultiple from './spin/ball-scale-multiple';
  import gtPacman from './spin/pacman';

  const SPINNERS = [
    'line-spin-fade',
    'ball-scale-multiple',
    'pacman'
  ];
  const parseSpinner = function(index) {
    if ({}.toString.call(index) === '[object Number]') {
      if (SPINNERS.length <= index) {
        console.warn(`'${index}' spinner not found, use the default spinner.`);
        index = 0;
      }
      return SPINNERS[index];
    }

    if (SPINNERS.indexOf(index) === -1) {
      console.warn(`'${index}' spinner not found, use the default spinner.`);
      index = SPINNERS[0];
    }
    return index;
  };
  export default {
    name: 'gtSpinner',
    mixins: [common],
    props: {
      type: {
        default: 0
      },
      size: {
        type: Number,
        default: 28
      },
      color: {
        type: String,
        default: '#ccc'
      }
    },
    computed: {
      spinner() {
        return `gt-${parseSpinner(this.type)}`;
      }
    },
    components: {
      gtLineSpinFade,
      gtBallScaleMultiple,
      gtPacman
    }
  };
</script>

