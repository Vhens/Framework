<template>
    <gt-row
      class="gt-input"
      :title="label">
      <input
        @change="$emit('change', currentValue)"
        ref="input"
        class="gt-input-core"
        :placeholder="placeholder"
        :number="type === 'number'"
        :type="type"
        @focus="active = true"
        :disabled="disabled"
        :readonly="readonly"
        :value="currentValue"
        @input="handleInput" slot="value">
      <div
        @click="handleClear"
        class="gt-input-clear"
        v-if="!disableClear"
        v-show="currentValue && active">
        <i class="gt gt-input-icon icon-delete"></i>
      </div>
      <span class="gt-input-state" v-if="state" :class="['is-' + state]">
        <i class="gt gt-input-icon" :class="['icon-' + state]"></i>
      </span>
      <div class="gt-input-other">
        <slot></slot>
      </div>
    </gt-row>
  </template>
  
  <script>
  import gtRow from '../row/row';
  export default {
    name: 'gtInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      rows: String,
      label: String,
      placeholder: String,
      readonly: Boolean,
      disabled: Boolean,
      disableClear: Boolean,
      state: {
        type: String,
        default: 'default'
      },
      value: {},
      attr: Object
    },
    data() {
      return {
        currentValue: this.value,
        active: false
      };
    },
    components: { 
      gtRow 
    },
    methods: {
      doCloseActive() {
        this.active = false;
      },
      handleInput(e) {
        this.currentValue = e.target.value;
      },
      handleClear() {
        if (this.disabled || this.readonly) return;
        this.currentValue = '';
      }
    },
    watch: {
      value(val) {
        this.currentValue = val;
      },
      currentValue(val) {
        this.$emit('input', val);
      }
    }
  };
  </script>