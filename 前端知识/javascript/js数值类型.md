
 1、js中有5种基本类型: undefined 、null、 Boolean、Number、String
 2、复杂数据类型(引用型): Object

```
let i;
i === undefined      // true
null == undefined    // true
null === undefined   // false
```
3、typeof运算符返回类型的字符串值
```
typeof undefined    // undefined
typeof null         // object 特殊情况
typeof 1            // number
typeof '2'          // string
typeof true         // boolean
typeof function(){} // function
typeof {age: 18 }   // object
typeof [0]          // object
typeof Symbol()     // symbol
```
4、instanceof运算符(只能用来判断对象和函数，不能用来判断字符串和数字,检测对象的原型链是否指向构造函数的prototype对象)
```
let arr = [2]
arr instanceof Array        // true
arr instanceof Object       // true

function A(){} 
function B(){} 
B.prototype = new A();
let b = new B(); 
b instanceof B             // true
b instanceof A             // true

Object instanceof Object  // true

let reg = /sfdsf/g;
reg instanceof RegExp    // true

null instanceof Object  // false 
```
5、null instanceof Object 与 typeof null === 'object' 检查不一致，正确检测 null

```
let a = null;
(!a && typeof a === "object");    // true
```
6、Object.prototype.toString(准确区分数据的类型)
```
 Object.prototype.toString.call(1)     // [object Number] 
 Object.prototype.toString.call('1')   // [object String] 
 Object.prototype.toString.call(true)  // [object Boolean] 
 Object.prototype.toString.call(undefined) // [object Undefined] 
 Object.prototype.toString.call(null)  // [object Null] 
 Object.prototype.toString.call({})    // [object Object] 
 Object.prototype.toString.call([])   // [object Array] 
 Object.prototype.toString.call(new Date) // [object Date] 
 Object.prototype.toString.call(new Error())   // [object Error] 
 Object.prototype.toString.call(/a/) // [object RegExp] 
 Object.prototype.toString.call(function () {}) // [object Function]
 ```

