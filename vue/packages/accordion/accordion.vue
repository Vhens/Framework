<template>
    <div class="gt-accordion">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'gtAccordion',
    data() {
      return {
        opening: false
      }
    },
    props: {
      accordion: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      open(uid) {
        if (this.opening) {
          return false;
        };
        this.$children.forEach(item => {
            if (item._uid === uid) {
                item.show ? item.closeItem() : item.openItem();
            } else {
                !this.accordion && item.closeItem();
            }
        });
      }
    }
  }
</script>
