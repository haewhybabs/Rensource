import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
          <View>
            <Icon 
              name="home"
              size={30}
              color="#8295A3"
            />
            <Text style={Styles.contentText}>Home</Text>
          </View>

          <View>
            <Icon 
              name="shopping-cart"
              size={30}
              color="#8295A3"
            />
            <Text style={Styles.contentText}>Buy</Text>
          </View>

          <View>
            <Icon 
              name="local-offer"
              size={30}
              color="#8295A3"
            />
            <Text style={Styles.contentText}>Deal</Text>
          </View>

          <View>
            <Icon 
              name="storefront"
              size={30}
              color="#8295A3"
            />
            <Text style={Styles.contentText}>Wallet</Text>
          </View>

          <View>
            <Icon 
              name="menu"
              size={30}
              color="#8295A3"
            />
            <Text style={Styles.contentText}>Home</Text>
          </View>
        </View>
      </View>
    );
  }
}
