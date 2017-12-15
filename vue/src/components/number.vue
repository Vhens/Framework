<template>
  <div class="box1">
     <gt-row title="数量">
        <gt-number name="number"></gt-number>
     </gt-row>
     <gt-row title="数量">
       <gt-number  :value="0" :min="0"></gt-number>
     </gt-row>
     <gt-row title="数量">
       <gt-number  :min="0" :max="5"></gt-number>
     </gt-row>
      <gt-row title="数量">
       <gt-number :step="0.5"></gt-number>
     </gt-row>
     <gt-row title="数量">
       <gt-number write></gt-number>
     </gt-row>
      <gt-row title="数量">
       <gt-number button-style="round" :value="0" :min="0" :max="15"></gt-number>
     </gt-row>
  </div>
</template>
