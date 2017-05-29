import React        from 'react';
import { render }   from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware }             from 'react-router-redux';
import createHistory                    from 'history/createBrowserHistory';

import { ConnectedRouter } from 'react-router-redux';
import { Provider }        from 'react-redux';
import { Route }           from 'react-router-dom';

import { root } from './reducers/rootReducer';


import AppContainer from './containers/AppContainer.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const history      = createHistory();
const middleware   = routerMiddleware(history);
const devTools     = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(root, devTools, applyMiddleware(middleware));

const router = (
  <Provider store={ store }>
    <ConnectedRouter history={ history } >
      <Route path='/' component={ AppContainer } />
    </ConnectedRouter>
  </Provider>
);


render(router, document.getElementById('root'));
registerServiceWorker();
