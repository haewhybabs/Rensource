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
  closeMessage=()=>{
    this.props.updateState('message',false)
  }
  render() {
    const {content} =this.props;
    return (
    <View style={Styles.messageWrapper}>
      <View style={Styles.messageContainer}>
        <View style={Styles.messageRow}>
            <Text style={Styles.messageContent}>{content}</Text>
            <Icon 
              name="close"
              size={30}
              onPress={()=>this.closeMessage()}
            />
        </View>
      </View>
    </View>
    );
  }
}
