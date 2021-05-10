import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './styles';
import { Icon } from 'react-native-elements';
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.contentWrapper}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
            <Icon 
              name="home"
              size={20}
              color="#8295A3"
            />
            <Text style={Styles.contentText}>Home</Text>
          </TouchableOpacity>

          <View>
            <Icon 
              name="shopping-cart"
              size={20}
              color="#8295A3"
            />
            <Text style={Styles.contentText}>Buy</Text>
          </View>

          <View>
            <Icon 
              name="local-offer"
              size={20}
              color="#8295A3"
            />
            <Text style={Styles.contentText}>Deal</Text>
          </View>

          <View>
            <Icon 
              name="storefront"
              size={20}
              color="#8295A3"
            />
            <Text style={Styles.contentText}>Wallet</Text>
          </View>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
            <Icon 
              name="menu"
              size={20}
              color="#8295A3"
            />
            <Text style={Styles.contentText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
