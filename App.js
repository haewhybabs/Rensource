import React, { Component } from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { switchNavigator } from './project/navigation/switchNavigator';
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
const initialState = {
  data:null
}
const reducer = (state=initialState,action)=>{
  switch(action.type){
    case 'cartData':
    return action.payload
  }
  return state;
}
const store = createStore(reducer);