### React是一个声明式的，高效的，并且灵活的用于构建用户界面的 JavaScript 库
### 组件
* React 组件使用一个名为 render() 的方法， 接收数据作为输入，输出页面中对应展示的内容。输入的数据通过 this.props 传入 render() 方法。

```
class Home extends React.Component {
  render() {
    return (
      <div>
        我是 { this.props.name }
      </div>
    );
  }
}

ReactDOM.render(
  <Home name="vhen" />,
  document.getElementById('root')
);
```
### 有状态组件

* 除了使用外部传入的数据以外 (通过 this.props 访问传入数据), 组件还可以拥有其内部的状态数据 (通过 this.state 访问状态数据)。 当组件的状态数据改变时， 组件会调用 render() 方法重新渲染。

```
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

ReactDOM.render(<Timer />, document.getElementById('root'));
```