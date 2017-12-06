<template>
  <div class="box1">
    <gt-row :title="rater1">
      <gt-rater v-model="rater1" active-color="rgb(255, 93, 80)" disabled></gt-rater><br/>
    </gt-row>
    <gt-row :title="rater2">
      <gt-rater v-model="rater2" icon="kaixin" active-color="#FF9900" :size="50" :margin="30"></gt-rater>
    </gt-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        rater1: 3.6,
        rater2: 2
      };
    }
  };
</script>
