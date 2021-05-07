import React, { Component } from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';
import Header from '../Header';
import Styles from './styles';
import {Icon} from 'react-native-elements';
import Message from '../../common/message'
import AntIcon from "react-native-vector-icons/AntDesign";
import CartItem from './CartItem';
import { ScrollView } from 'react-native-gesture-handler';
import Products from '../Home/Products';

export default class Carts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Header name="Cart"/>
        <ScrollView>
          <View style={Styles.containerBackground}>
            <CartItem />
            <CartItem />
          </View>
          <View style={Styles.checkoutCardContainer}>
            <View style={Styles.checkoutCardWrapper}>
              <View style={Styles.subTotalRow}>
                <Text style={Styles.totalText}>Subtotal</Text>
                <Text style={Styles.totalText}>N18,099.09</Text>
              </View>
              <View style={{...Styles.subTotalRow,marginTop:15}}>
                <Text style={Styles.totalText}>Total</Text>
                <Text style={{...Styles.totalText,fontWeight:'bold'}}>N18,099.09</Text>
              </View>
              <TouchableOpacity style={Styles.checkoutButton}>
                <Text style={Styles.checkoutText}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.lineBreak} />
          <View style={{...Styles.subTotalRow,margin:20}}>
            <Text style={Styles.recentlyViewText}>Recently View</Text>
            <Text style={Styles.viewAllText}>View all</Text>
          </View>
          <Products />
        </ScrollView>
      </>
    );
  }
}
