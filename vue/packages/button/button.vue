<template>
  <button class="gt-button" :class="classes" :disabled="disabled" @click="handleClick">
    <!-- <i class="gt gt-loading icon-loading1"  v-if="isLoading"></i> -->
    <gtSpinner class="gt-loading" type="line-spin-fade" v-if="isLoading"></gtSpinner>
    <span class="gt-button-text"><slot></slot></span>
  </button>
</template>

<script>
  import gtSpinner from '../spinner/spinner';

  export default {
    name: 'gtButton',
    props: {
      type: {
        type: String,
        default: 'default'
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
      gtSpinner
    },
    computed: {
      classes () {
        let res = {};
        let classType = this.plain ? `gt-button-plain-${this.type}` : `gt-button-${this.type}`
        let classDisabled = this.plain ? 'gt-button-plain-disabled' : 'gt-button-disabled';
        res[classType] = true;
        res[classDisabled] = this.disabled;
        // res['gt-loading'] = this.isLoading
        return res;
      }
    }
  }
</script>
