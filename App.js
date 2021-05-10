import React, { Component } from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { switchNavigator } from './project/navigation/switchNavigator';
import reducers from './project/common/reducers';
import 'react-native-gesture-handler';
const AppNav = createAppContainer(switchNavigator);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNav />
      </Provider>
    )
  }
}
const store = createStore(reducers);