<template>
    <p :class="classes">
        <template v-if="!!$slots.icon">
            <span class="gt-timeline-icon"><slot name="icon"></slot></span>
        </template>
        <template v-else>
            <em class="gt-timeline-icon"></em>
        </template>
        <slot></slot>
    </p>
</template>

<script>
  export default {
    computed: {
      classes () {
        let res = {};
        res =  !!this.$slots.icon ? 'gt-timeline-custom-item' : 'gt-timeline-item';
        return res;
      }
    }
  }
</script>
