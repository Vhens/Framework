<template>
  <!-- <div class="gt-number">
    <div>
    </div>
    <div class="gt-number-primary" :class="{'gt-number-round': buttonStyle === 'round'}" v-show="!readonly">
      <div>
        <a @click="sub" class="gt-number-selector vux-number-selector-sub i":class="{'vux-number-disabled':disabledMin}">
          <i class="gt icon-subtract"></i>
        </a>
        <input v-model.number="currentValue" :name="name" class="vux-number-input i" :style="{width: width}" :readonly="!write" pattern="[0-9]*" type="number" @blur="blur" />
        <a @click="add" class="vux-number-selector vux-number-selector-plus i" :class="{'vux-number-disabled':disabledMax}">
          <i class="gt icon-add"></i>
        </a>
      </div>
    </div>
  </div> -->
  <div class="gt-number">
    <div class="gt-number-primary" :class="{'gt-number-round': buttonStyle === 'round'}" v-show="!readonly">
      <div class="gt-number-item gt-number-reduce" @click="sub" :class="{'gt-number-disabled':disabledMin,'gt-number-round-item': buttonStyle === 'round'}">
        <i class="gt icon-subtract gt-number-icon"></i>
      </div>
      <div class="gt-number-item gt-number-input">
        <input v-model.number="currentValue" :name="name" :style="{width: width}" :readonly="!write" pattern="[0-9]*" type="number" @blur="blur">
      </div>
      <div class="gt-number-item gt-number-add" @click="add" :class="{'gt-number-disabled':disabledMax, '.gt-number-round-item': buttonStyle === 'round'}">
        <i class="gt icon-add gt-number-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
const Big = require('big');
export default {
  name: 'gtNumber',
  props: {
    min: Number,
    max: Number,
    readonly: Boolean,
    step: {
      type: Number,
      default: 1
    },
    value: {
      validator (value) {
        if (typeof value === 'number') {
          return true
        } else if (typeof value === 'string') {
          return value === ''
        }
        return false
      },
      default: 0
    },
    name: String,
    write: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50px'
    },
    buttonStyle: {
      type: String,
      default: 'square'
    }
  },
  created () {
    this.currentValue = this.value
  },
  data () {
    return {
      currentValue: 0
    }
  },
  computed: {
    disabledMin () {
      return typeof this.min === 'undefined' ? false : (this.currentValue === '' ? true : this.currentValue <= this.min)
    },
    disabledMax () {
      return typeof this.max === 'undefined' ? false : (this.currentValue === '' ? true : this.currentValue >= this.max)
    }
  },
  methods: {
    add () {
      if (!this.disabledMax) {
        const x = new Big(this.currentValue)
        this.currentValue = x.plus(this.step) * 1
      }
    },
    sub () {
      if (!this.disabledMin) {
        const x = new Big(this.currentValue)
        this.currentValue = x.minus(this.step) * 1
      }
    },
    blur () {
      if (this.currentValue === '') {
        this.currentValue = 0
      }
    }
  },
  watch: {
    currentValue (newValue, oldValue) {
      if (newValue !== '') {
        if (typeof this.min !== 'undefined' && this.currentValue < this.min) {
          this.currentValue = this.min
        }
        if (this.max && this.currentValue > this.max) {
          this.currentValue = this.max
        }
      }
      this.$emit('input', this.currentValue)
      this.$emit('on-change', this.currentValue)
    },
    value (newValue) {
      this.currentValue = newValue
    }
  }
}
</script>
