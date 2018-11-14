import Navigator from './Navigator';
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import navigation from './reducer';

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';

import { connect } from 'react-redux'

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const navReducer = createNavigationReducer(Navigator);
const appReducer = combineReducers({
  nav: navReducer,
});

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);

const AppNav = reduxifyNavigator(Navigator, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(AppNav);

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}