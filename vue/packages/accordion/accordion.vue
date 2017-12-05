<template>
  <section class="gt-accordion">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'gtAccordion',
    props: {
       defaultIndex: String,
       multi: {
        type: String,
        default: 'true',
        validator: (v) => {
          return v === 'true' || v === 'false'
        }
      }
    },
    computed: {
      activeIndex: function () {
        return ~~this.defaultIndex;
      }
    },
    mounted () {
      this.$emit('activeIndexChanged', this.activeIndex);
    }
  }
</script>
