import React from 'react';
import {render} from 'react-dom';

import Head from './components/header/index';
import Demo1 from './test/demo1';
class App extends React.Component {
    render() {
        let data="54545454";
        return (
            <div>
                <Head name={data}/>
                <Demo1 title={data}/>
                <p> this is react</p>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
