<template>
  <a class="gt-grid-item" :href="href">
    <div class="gt-grid-icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <p class="gt-grid-label" v-if="$slots.label">
      <slot name="label"></slot>
    </p>
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'gtGridItem',
    props: {
      to: String
    },
    computed: {
      href () {
        if (this.to && !this.added && this.$router) {
          const resolved = this.$router.match(this.to)
          if (!resolved.matched.length){
            return this.to
          }
          this.$nextTick(() => {
            this.added = true
            this.$el.addEventListener('click', this.handleClick)
          })
          return resolved.path
        }
        return this.to
      }
    },
    methods: {
      handleClick ($event) {
        $event.preventDefault()
        this.$router.push(this.href)
      }
    }
  }
</script>
