import React, { Component } from 'react';
import { View, Text,StatusBar,TouchableOpacity } from 'react-native';
import Styles from './styles';
import AntIcon from "react-native-vector-icons/AntDesign";
export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.container}>
       <StatusBar backgroundColor='#227EFF' barStyle="light-content" />
        <View style={Styles.markContainer}>
          <View style={Styles.markCover}>
            <AntIcon
              name="check"
              color="#fff"
              size={70}
            />
          </View>
        </View>
        <View style={Styles.checkoutTextContainer}>
          <Text style={Styles.checkoutHeaderText}>Checkout Successful</Text>
          <Text style={Styles.checkoutText}>Your checkout is now successful</Text>
        </View>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity style={Styles.okayButton} onPress={()=>this.props.navigation.navigate('Home')}>
            <Text style={Styles.buttonText}>Got It</Text>
          </TouchableOpacity>
        </View>
        
        
      </View>
    )
  }
}
