<template>
  <section class="gt-accordion-item">
    <div class="gt-item-icon-right" @click="handleClick">
      <span v-text="title"></span>
      <i class="gt gt-arrow-down" :class="classes"></i>
    </div>
    <transition name="gt-accordion">
      <div class="gt-accordion-content" v-show="expanded">
        <slot></slot>
      </div>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'gtAccordionItem',
    props: {
      title: String,
      icon: {
        type: String,
        default: 'xiangxiajiantou'
      }
    },
    data() {
      return {
        expanded: false,
        index: -1
      }
    },
    computed: {
      classes () {
        let res = {};
        let iconClass = `icon-${this.icon}`;
        res['rotated'] =  this.expanded;
        res[iconClass] = true;
        return res;
      }
    },
    methods: {
      handleClick() {
        this.expanded = !this.expanded
        if (this.expanded){
          this.$emit('activeIndexChanged', this.index)
        }
      }
    },
    mounted() {
      const children = this.$el.parentNode.children

      for (let i = 0; i < children.length; i++) {
        if (children[i] == this.$el) {
          this.index = i
          break
        }
      }
      this.$on('activeIndexChanged', activeIndex => {
        console.log(activeIndex);
        console.log(this.index);
        if (activeIndex != this.index){
           this.expanded = false;
        }
      })
    }
  }
</script>
