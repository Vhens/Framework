import React from 'react';
import {render} from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'
class Demo1 extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {date: new Date()};
    }
    componentWillMount () {
        console.log('渲染前调用',this)
    }
    componentDidMount () {
        console.log('第一次渲染后调用',this)
    }
    componentWillReceiveProps () {
        console.log('在组件接收到一个新的prop时被调用',this)
    }
    shouldComponentUpdate () {
        console.log('在组件接收到新的props或者state时被调用',this)
    }
    componentWillUpdate () {
        console.log('在组件接收到新的props或者state但还没有render时被调用',this)
    }
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}
export default Demo1;
