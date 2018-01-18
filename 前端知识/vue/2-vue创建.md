### 渲染视图

```
<div id="app">
  {{ msg }}
</div>

<script>
  let vm=new Vue({
    el: '#app',  // el：提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标
    // Vue 实例的数据对象，用于给 View 提供数据
    data: {
      msg: 'Hello Vue!'
    }
  });
</script>

```

### vue 实例

```
let vm = new Vue({
  el: '#app',
  data () {
    msg: 'vhen'
  }
});

vm.$data.msg === vm.msg // true
```
### 数据绑定 Mustache(插值语法)

* 最常用的方式：{{}}
* 解释：{{}}从数据对象data中获取数据
* 说明：数据对象的属性值发生了改变，插值处的内容都会更新

```
// 正确用法
<p>hello,{{ msg }}</p>
<p>{{ 5 + 5 }}</p>
<p>{{ ok ? 1 : 0 }}</p>
// 错误用法
<p title="{{ err }}"></p>