<template>
  <div class="gt-textarea">
    <div class="gt-textarea-title">
      <slot name="label">
        <label class="gt-textarea-label" :class="labelClass" :style="{width: $parent.labelWidth || (labelWidth + 'em'), textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-if="title" v-html="title"></label>
      </slot>
    </div>
    <div class="gt-textarea-context-box">
      <textarea
        class="gt-textarea-content"
        :autocomplete="autocomplete"
        :autocapitalize="autocapitalize"
        :autocorrect="autocorrect"
        :spellcheck="spellcheck"
        :placeholder="placeholder"
        :readonly="readonly"
        :name="name"
        :rows="rows"
        :cols="cols"
        v-model="currentValue"
        @focus="$emit('on-focus')"
        @blur="$emit('on-blur')"
        :style="textareaStyle"
        :maxlength="max"
        ref="textarea"></textarea>
      <div class="gt-textarea-counter" v-show="showCounter && max" @click="focus">
        <span>{{count}}</span>/{{max}}
      </div>
    </div>
  </div>
</template>

<script>
import Autosize from 'autosize';

export default {
  name: 'gtTextarea',
  props: {
    title: String,
    showCounter: {
      type: Boolean,
      default: true
    },
    max: Number,
    value: String,
    name: String,
    placeholder: String,
    readonly: Boolean,
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 30
    },
    height: Number,
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    autosize: Boolean
  },
  created () {
    this.currentValue = this.value
  },
  data () {
    return {
      hasRestrictedLabel: false,
      currentValue: ''
    }
  },
  computed: {
    count () {
      let len = 0
      if (this.currentValue) {
        len = this.currentValue.replace(/\n/g, 'aa').length
      }
      return len > this.max ? this.max : len
    },
    textareaStyle () {
      if (this.height) {
        return {
          height: `${this.height}px`
        }
      }
    },
    labelStyles () {
      return {
        width: this.$parent.labelWidth || (this.labelWidth + 'em'),
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      }
    },
    labelWidth () {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1
    },
    labelClass () {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      }
    }
  },
  methods: {
    updateAutosize () {
      Autosize.update(this.$refs.textarea)
    },
    // prop.autosize
    bindAutosize () {
      Autosize(this.$refs.textarea)
    },
    unbindAutosize () {
      Autosize.destroy(this.$refs.textarea)
    },
    focus () {
      this.$refs.textarea.focus()
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.autosize) {
        this.bindAutosize()
      }
    })
  },
  watch: {
    autosize (val) {
      this.unbindAutosize()
      if (val) {
        this.bindAutosize()
      }
    },
    value (val) {
      this.currentValue = val
    },
    currentValue (newVal) {
      if (this.max && newVal && newVal.length > this.max) {
        this.currentValue = newVal.slice(0, this.max)
      }
      this.$emit('input', this.currentValue)
      this.$emit('on-change', this.currentValue)
    }
  },
  beforeDestroy () {
    this.unbindAutosize()
  }
}
</script>
