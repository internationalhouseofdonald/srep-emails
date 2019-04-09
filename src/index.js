import React from 'react';
import ReactDOM from 'react-dom'; 
import { Route } from 'react-router-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './styles.scss';

import { App } from './components/App';

const history = createBrowserHistory();

window.React = React;

if (module.hot) {
  module.hot.accept();
} else {
  console.log('[HMR] has not been enabled.');
}

ReactDOM.render((
    <Router history={history} >
      <Route render={(routeProps) => <App {...routeProps} /> } />
    </Router>
), document.getElementById('app'));