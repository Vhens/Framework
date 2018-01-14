###### 概念
闭包是指可以访问另一个函数作用域变量的函数，一般是定义在外层函数中的内层函数。
###### 使用场景
  1、实现私有成员。  
  2、保护命名空间，避免污染全局变量。  
  3、缓存变量。  
* 封装案例
```
  let person = function () {
    let name = "vhen";
    return {
      get () {
        return name;
      },
      set (value) {
        name = value;
      }
    }
  }()
  console.log(person.name) // undefined
  console.log(person.get()) // vhen
  console.log(person.set('wenwen')) 
  console.log(person.get()) // wenwen
  ```
  ###### 注意事项
  * 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE浏览器中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
  ```
  function fn () {
    let oDiv = document.getElementById('myId');
    let id = oDiv.id;
    oDiv.onclick = function () {
      console.log(id)
      // 这里存在循环引用，IE低版本页面关闭后oDiv仍在内存中。所以尽可能缓存基本类型而不是对象。
    };
    oDiv = null;
  }
  ```
  ```
 function fn () {
    let n = 1;
    return function fun () {
      console.log('dd', n++)
    };
  }
  let f = fn();
  f(); // 1 执行完后 n++，变量n任然存在于内存中
  // fun = null;// n被回收 
```
  * 变量命名如果内部函数的变量和外部函数的变量名相同时，那么内部函数再也无法指向外部函数那个同名的变量。
```
  function fn (n) {
    return function (n) {
      console.log(n)
    }
  }
  let f = fn(9);
  f() // undefined
```
```
function fn (n) {
  let i = 3;
  return function (m) {
    console.log(n+m+(++i));
  }
}
let f = fn(2);
f(10) // 16
```
  ###### 思考

  * 代码一
```
let name = "The Window";
let object = {
　name : "My Object",
　getNameFunc : function(){
　　return function(){
　　　return this.name;
　　};
　}
};
console.log(object.getNameFunc()());
```
* 代码二
```
let name = "The Window";
let object = {
　name : "My Object",
　getNameFunc : function(){
    let self = this;
　　 return function(){
　　　 return self.name
　　 };
　}
};
console.log(object.getNameFunc()());
```