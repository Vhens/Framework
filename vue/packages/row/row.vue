<template>
  <a class="gt-row" :href="href">
    <span class="gt-row-mask" v-if="isLink"></span>
    <div class="gt-row-left">
      <slot name="left"></slot>
    </div>
    <div class="gt-row-container">
      <div class="gt-row-title">
        <slot name="icon">
          <i v-if="icon" class="gt gt-icon-left" :class="'icon-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="gt-row-text" v-text="title"></span>
          <span v-if="label" class="gt-row-label" v-text="label"></span>
        </slot>
      </div>
      <div class="gt-row-value" :class="{ 'is-link' : isLink }">
        <span v-text="value"></span>
        <slot name="value">
        </slot>
      </div>
      <slot></slot>
      <i v-if="isLink" class="gt gt-arrow-right icon-xiangyoujiantou"></i>
    </div>
    <div class="gt-row-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'gtRow',
    props: {
      title: {
        type: [String, Number, Boolean],
        default: ''
      },
      to: [Object, String],
      icon: String,
      label: String,
      isLink: Boolean,
      value: {}
    },
    methods: {
      handleClick(e) {
        e.preventDefault();
        this.$router.push(this.href);
      }
    },
    computed: {
      href() {
        if (this.to && !this.added && this.$router) {
          const resolved = this.$router.match(this.to);
          if (!resolved.matched.length){
            return this.to;
          }
          this.$nextTick(() => {
            this.added = true;
            this.$el.addEventListener('click', this.handleClick);
          });
          return resolved.fullPath || resolved.path;
        }
        return this.to;
      }
    }
  }
</script>
