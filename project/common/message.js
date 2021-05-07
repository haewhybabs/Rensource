import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './styles';
import {Icon} from 'react-native-elements';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
    <View style={Styles.messageWrapper}>
      <View style={Styles.messageContainer}>
        <View style={Styles.messageRow}>
            <Text style={Styles.messageContent}> Item added to cart successfully </Text>
            <Icon 
                name="close"
                size={30}
            />
        </View>
      </View>
    </View>
    );
  }
}
