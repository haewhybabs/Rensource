import React, { Component } from 'react';
import { View,Text,Image, TouchableOpacity } from 'react-native';
import Styles from './styles';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const {item}=this.props;
    return (
        <TouchableOpacity style={Styles.productItemWrapper} onPress={()=>this.props.navigation.navigate('Details',{item})}>
            <Image 
                source = {item.image}                         
                style={Styles.productItemImage}      
            />
            <Text style={Styles.productItemText} numberOfLines={2}>{item.name}</Text>
            <Text style={Styles.productItemPrice}>₦{item.price}</Text>
        </TouchableOpacity>
    );
  }
}
