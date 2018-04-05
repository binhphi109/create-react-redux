import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers/index';

export const history = createHistory();

export const store = createStore(reducers, compose(
  applyMiddleware(thunk, routerMiddleware(history)),
  window.devToolsExtension && window.devToolsExtension()
));
