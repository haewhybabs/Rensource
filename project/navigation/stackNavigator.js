import { createStackNavigator } from "react-navigation-stack";
import { stackNavigatorConfig } from "../configs/navigationConfig";

import Home from "../components/Home";
import Details from "../components/Details";
import Checkout from '../components/Checkout';
import Carts from '../components/Carts';

export const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },

    Details:{
      screen:Details
    },
    Checkout:{
      screen:Checkout
    },
    Carts:{
      screen:Carts
    }
    
  },
  {
    ...stackNavigatorConfig,
    initialRouteName: "Home"
  }
);

