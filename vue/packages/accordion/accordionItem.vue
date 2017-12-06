<template>
    <div class="gt-accordion-item">
      <div class="gt-accordion-head">
        <div class="gt-accordion-head-content">
          <slot name="icon"></slot>
          <div @click="handleToggle" class="gt-accordion-title" :class="!$slots.icon && !$slots.txt ? 'gt-accordion-title-full' : ''">
            <span v-if="$slots.title"><slot name="title"></slot></span>
            <span v-else>{{title}}</span>
          </div>
          <slot name="txt"></slot>
        </div>
        <i class="gt icon-xiangxiajiantou" :class="classes"></i>
      </div>
      <div class="gt-accordion-content" :style="styleHeight">
        <div ref="content">
          <slot></slot>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'gtAccordionItem',
    props: {
      title: String,
      open: {
        type: Boolean,
        default: false
      },
      auto: {
        type: Boolean,
        default: true
      },
      icon: {
        type: String,
        default: 'xiangxiajiantou'
      }
    },
    data() {
      return {
        show: this.open,
        height: 0,
        styleHeight: {height: 0}
      }
    },
    computed: {
      classes () {
        let res = {};
        let iconClass = `icon-${this.icon}`;
        res['gt-accordion-rotated'] = this.show;
        res[iconClass] = true;
        return res;
      }
    },
    methods: {
      handleToggle() {
        if(!this.auto){
          return false;
        };
        this.$parent.open(this._uid);
      },
      openItem() {
        this.$parent.opening = true;
        this.styleHeight = {height: this.$refs.content.offsetHeight + 'px'};
        setTimeout(() => {
          this.styleHeight = {};
          this.$parent.opening = false;
        }, 200);
        this.show = true;
      },
      closeItem() {
        if (this.styleHeight.height === undefined) {
            this.styleHeight = {height: this.$refs.content.offsetHeight + 'px'};
            setTimeout(() => {
                this.styleHeight = {height: 0};
            }, 50);
        } else {
            this.styleHeight = {height: 0};
        }
        this.show = false;
      }
    },
    mounted() {
        this.$nextTick(() => {
            this.open && this.openItem();
        });
    },
    watch: {
      open(val) {
        val ? this.$parent.open(this._uid) : this.closeItem();
      }
    }
  }
</script>
