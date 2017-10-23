import React from 'react';
import {render} from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.scss';
class Header extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    handleClick(){
      console.log(this)
    }
    render() {
        return (
            <div>
                <p className="header" onClick={this.handleClick.bind(this)}> this is header</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
Header.propTypes = {
    name: React.PropTypes.string.isRequired
};
export default Header;
