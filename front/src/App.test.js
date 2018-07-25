import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { default as reducer, defaultState } from './state';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(
  reducer,
  defaultState,
  composeWithDevTools(applyMiddleware(thunk))
);

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>
  , div);
});