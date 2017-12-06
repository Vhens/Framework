<template>
  <section class="gt-switch">
    <label class="gt-label-switch">
      <input type="checkbox" class="gt-switch-input" v-model="currentValue" :disabled="disabled" @change="$emit('change', currentValue)">
      <span class="gt-switch-core"></span>
      <div class="gt-switch-title"><slot></slot></div>
    </label>
  </section>
</template>

<script>
  export default {
    name: 'gtSwitch',
    props: {
      value: Boolean,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      currentValue: {
        get () {
          return this.value;
        },
        set (val) {
          this.$emit('input', val);
        }
      }
    }
  }
</script>
