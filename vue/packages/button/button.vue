<template>
  <button class="gt-button" :class="classes" :disabled="disabled" @click="handleClick">
    <span class="gt-button-text"><slot></slot></span>
  </button>
</template>

<script>
  import gtIcon from '../icon/icon';

  export default {
    name: 'gtButton',
    props: {
      type: {
        type: String
      },
      disabled: Boolean,
      plain: Boolean,
      isLoading: Boolean
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    },
    components: {
      gtIcon
    },
    computed: {
      classes () {
        let res = {};
        let classType = this.plain ? `gt-btn-plain-${this.type}` : `gt-btn-${this.type}`
        let classDisabled = this.plain ? 'gt-btn-plain-disabled' : 'gt-btn-disabled';
        res[classType] = true;
        res[classDisabled] = this.disabled;
        // res['gt-btn-loading'] = this.isLoading
        return res;
      }
    }
  }
</script>
