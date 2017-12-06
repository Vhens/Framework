<template>
  <div>
    <div class="box1">
      <gt-row :title="val">
        <gt-switch v-model="val"></gt-switch>
      </gt-row>
      <gt-row title="禁用了....">
        <gt-switch disabled></gt-switch>
      </gt-row>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        val: false
      };
    }
  };
</script>
