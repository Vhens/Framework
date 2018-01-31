
import * as React from 'react';
import * as ReactDOM from 'react-dom'
import store from './store';
import  { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import Index from './routes';
useStrict(true);

const render = (Component) => {
  ReactDOM.render(
    <Provider {...store}>
       <Component />
    </Provider>,
    document.getElementById('app') as HTMLElement
  )
}

render(Index);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(['routes'], () => {
    // const NextApp = require<RequireImport>('router').default
    // render(NextApp)
  })
  module.hot.accept(['store'], () => {
    window.location.reload()
  })
}
