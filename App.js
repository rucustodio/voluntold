import RootNavigator from './RootNavigator';
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import authReducer from './app/reducers/authReducer';

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';

import { connect } from 'react-redux'
import eventsReducer from './app/reducers/eventsReducer';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const navReducer = createNavigationReducer(RootNavigator);
const appReducer = combineReducers({
  nav: navReducer,
  app: authReducer,
  events: eventsReducer,
});

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);

const AppNav = reduxifyNavigator(RootNavigator, 'root');
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