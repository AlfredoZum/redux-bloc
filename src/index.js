import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import reduxThunk from 'redux-thunk';

const store = createStore(
  //all reducers
  reducers,
  //init state
  {},
  applyMiddleware( reduxThunk ),
);

ReactDOM.render(
  <Provider store={ store }  >
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);