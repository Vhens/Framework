<template>
  <button class="gt-button" :class="classes" :type="actionType" :disabled="disabled" @click="handleClick">
    <gt-icon fontSize="30" icon="loading"></gt-icon>
    <span class="gt-button-text"><slot>{{ text }}</slot></span>
  </button>
</template>

<script>
  import gtIcon from '../../icon/src/icon';

  export default {
    name: 'gtButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      disabled: Boolean,
      plain: Boolean,
      text: String,
      actionType: String,
      showLoading: Boolean,
      to: [String, Object],
      mini: Boolean
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
        return [
          {
            'gt-button-disabled': this.disabled,
            'gt-button-mini': this.mini
          },
          `gt-button-${this.type}`,
          this.plain ? `gt-button-plain-${this.type}` : '',
          this.showLoading ? `gt-button-loading` : ''
        ]
      }
    }
  }
</script>