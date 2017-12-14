<template>
  <div class="box1">
     <gt-row title="数量">
        <gt-number name="number"></gt-number>
     </gt-row>
     <gt-row title="数量">
       <gt-number button-style="round" :value="0" :min="0"></gt-number>
     </gt-row>
     <gt-row title="数量">
       <gt-number button-style="round" :min="0" :max="5"></gt-number>
     </gt-row>
      <gt-row title="数量">
       <gt-number button-style="round" :step="0.5"></gt-number>
     </gt-row>
      <gt-row title="数量">
       <gt-number button-style="round"write></gt-number>
     </gt-row>
  </div>
</template>
