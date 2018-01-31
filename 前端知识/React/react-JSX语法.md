### JSX
1、JSX本身也是一个表达式，在编译后，JSX表达式会变成普通的JavaScript对象,它允许HTML和javascript混写。
```
import React,{ Component } from "react";
import { render } from "react-dom";

let flowers = ["一生花","桃花","百合花"];
class Flower extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render () {
    return (
      <div>
        flowers.map(item, index) => <div key={index}>{I love {item}}</div>
      </div>
    )
  }
}
export default Flower;
```
2、 元素属性
* class 属性改为  className
* for 属性改为  htmlFor
3、自定义 HTML  属性
```
<div data-attr="xxx">content</div>
<my-componet xx-attr=""/>
```
