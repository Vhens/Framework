<template>
  <transition :name="currentTransition">
    <div v-show="currentValue" class="gt-popup" :class="[position ? 'gt-popup-' + position : '']">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  import Popup from './index';
  export default {
    name: 'gtPopup',
    mixins: [Popup],
    props: {
      modal: {
        default: true
      },
      modalFade: {
        default: false
      },
      lockScroll: {
        default: false
      },
      closeOnClickModal: {
        default: true
      },
      popupTransition: {
        type: String,
        default: 'gt-popup-slide'
      },
      position: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        currentValue: false,
        currentTransition: this.popupTransition
      };
    },
    watch: {
      currentValue(val) {
        this.$emit('input', val);
      },
      value(val) {
        this.currentValue = val;
      }
    },
    beforeMount() {
      if (this.popupTransition !== 'gt-popup-fade') {
        this.currentTransition = `gt-popup-slide-${ this.position }`;
      }
    },
    mounted() {
      if (this.value) {
        this.rendered = true;
        this.currentValue = true;
        this.open();
      }
    }
  };
</script>
