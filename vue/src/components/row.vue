<template>
  <div class="box4">
    <gt-row title="列表1" is-link></gt-row>
    <gt-row title="列表2" value="列表内容..." is-link></gt-row>
    <gt-row title="列表3" icon="liwu" value="icon"></gt-row>
    <gt-row title="列表4" is-link>
      <span style="color: pink">嵌套内容....</span>
    </gt-row>
    <gt-row title="列表5" label="列表描述" is-link></gt-row>
    <gt-row title="列表5" label="列表描述" to="button" is-link></gt-row>
    <gt-row title="router跳转" label="跳转到 /popup" :to="{ name: 'popup' }" is-link></gt-row>
  </div>
</template>
