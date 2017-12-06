<template>
  <div class="gt-rater">
    <input type="hidden" v-model="currentValue" />
    <a class="gt-rater-container" v-for="i in max" @click="handleClick(i-1)" :class="{'active':currentValue > i-1}"
      :style="{color: colors && colors[i-1] ? colors[i-1] : '#ccc',marginRight:margin+'px',fontSize: size + 'px', width: size + 'px', height: size + 'px', lineHeight: size + 'px'}">
      <span class="gt-rater-inner">
        <i class="gt" :class="`icon-${icon}`" :style="{'font-size': size + 'px'}"></i>
        <i class="gt gt-rater-outer " :class="`icon-${icon}`" :style="{color: activeColor, width: cutPercent + '%',fontSize: size + 'px',}" v-if="cutPercent > 0 && cutIndex === i-1"></i>
      </span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'rater',
  created () {
    this.currentValue = this.value
  },
  mounted () {
    this.updateStyle()
  },
  props: {
    max: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    },
    disabled: Boolean,
    icon: {
      type: String,
      default: 'collection'
    },
    activeColor: {
      type: String,
      default: '#fc6'
    },
    margin: {
      type: [String, Number],
      default: 2
    },
    size: {
      type: Number,
      default: 60
    }
  },
  data () {
    return {
      colors: [],
      currentValue: 0
    }
  },
  computed: {
    sliceValue () {
      const val = this.currentValue.toFixed(2).split('.')
      return val.length === 1 ? [val[0], 0] : val
    },
    cutIndex () {
      return this.sliceValue[0] * 1
    },
    cutPercent () {
      return this.sliceValue[1] * 1
    }
  },
  methods: {
    handleClick (i, force) {
      if (!this.disabled || force) {
        if (this.currentValue === i + 1) {
          this.currentValue = i
          this.updateStyle()
        } else {
          this.currentValue = i + 1
        }
      }
    },
    updateStyle () {
      for (var j = 0; j < this.max; j++) {
        if (j <= this.currentValue - 1) {
          this.$set(this.colors, j, this.activeColor)
        } else {
          this.$set(this.colors, j, '#ccc')
        }
      }
    }
  },
  watch: {
    currentValue (val) {
      this.updateStyle()
      this.$emit('input', val)
    },
    value (val) {
      this.currentValue = val
    }
  }
}
</script>
