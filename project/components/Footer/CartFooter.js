import React, { Component } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
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
                <TouchableOpacity style={Styles.addCartButton} onPress={()=>this.props.navigation.navigate('Carts')}>
                    <Text style={Styles.addCartText}>Add to Cart</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.wishListButton}>
                    <Text style={Styles.wishListText}>Wishlist</Text>
                </TouchableOpacity>
            </View>

        </>
    );
  }
}
