<template>
  <div>
    <gt-row>
      <gt-spinner color="#26a2ff" class="spinner" type="ball-scale-multiple"></gt-spinner>
    </gt-row>

    <gt-row>
      <gt-spinner class="spinner1" type="pacman"></gt-spinner>
    </gt-row>

    <gt-row>
      <gt-spinner class="spinner2" color="#26a2ff" type="line-spin-fade"></gt-spinner>
    </gt-row>
  </div>
</template>

<style>
.spinner{
    transform: translate(-20px,20px);
}
.spinner1{
    transform: translate(-100px,-10px);
}
.spinner2{
    transform: translate(-10px,2px);
}
</style>

