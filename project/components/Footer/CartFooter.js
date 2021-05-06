import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './styles';

export default class CartFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <>
            <View style={Styles.breakout}/>
            <View style={Styles.cartFooterContainer}>
                <View style={Styles.addCartButton}>
                    <Text style={Styles.addCartText}>Add to Cart</Text>
                </View>

                <View style={Styles.wishListButton}>
                    <Text style={Styles.wishListText}>Wishlist</Text>
                </View>
            </View>

        </>
    );
  }
}
