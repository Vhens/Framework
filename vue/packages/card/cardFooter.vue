<template>
  <div class="gt-card-footer">
      <div class="gt-card-footer-item" v-if="$slots.left">
          <slot name="left"></slot>
      </div>
      <div class="gt-card-footer-item" v-if="$slots.right">
         <slot name="right"></slot>
      </div>
      <slot></slot>
    <slot></slot>
  </div>
</template>