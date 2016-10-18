import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { itemListReducer } from './reducers';
import App from './App';

const store = createStore(itemListReducer);
const root = document.createElement('div');

root.id = 'root';
document.body.appendChild(root);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
