<template>
  <section class="gt-toast-box">
    <transition name="gt-toast-pop">
      <div class="gt-toast" v-show="show" :class="customClass" :style="{ 'padding': iconClass === '' ? '30px' : '20px' }">
        <gt-icon class="gt-toast-icon" :class="iconClass" v-if="iconClass !== ''"></gt-icon>
        <span class="gt-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{message}}</span>
      </div>
    </transition>
  </section>
</template>

<script>
  import gtIcon from '../icon/icon';

  export default {
    name: 'gtToast',
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'top'
      },
      iconClass: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        show: false
      }
    },
    components: {
      gtIcon
    },
    computed: {
      customClass () {
        let classes = [];
        switch (this.position) {
          case 'top':
            classes.push('is-toast-top');
            break;
          case 'bottom':
            classes.push('is-toast-bottom');
            break;
          default:
            classes.push('is-toast-middle');
        }
        classes.push(this.className);
        return classes.join(' ');
      }
    }
  }
</script>
