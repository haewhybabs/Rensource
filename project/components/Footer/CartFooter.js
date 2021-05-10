import React, { Component } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import Styles from './styles';
import {addToCartAction,removeFromCartAction} from '../../constants/const_functions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class CartFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  addToCart=()=>{
    const item = this.props.item;
    item.qty=1;
    this.props.addToCartAction(item);
    this.props.updateState('message',true)

  }
  render() {
    return (
        <>
          <View style={Styles.breakout}/>
          <View style={Styles.cartFooterContainer}>
            <TouchableOpacity style={Styles.addCartButton} onPress={()=>this.addToCart()}>
                <Text style={Styles.addCartText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.wishListButton} onPress={()=>this.props.navigation.navigate('Carts')}>
                <Text style={Styles.wishListText}>Wishlist</Text>
            </TouchableOpacity>
          </View>
        </>
    );
  }
}
const mapStateToProp = (state) =>{
  return {
    cart:state.cart
  }
}
const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    addToCartAction
  },dispatch)
}
export default connect(mapStateToProp,mapActionsToProps)(CartFooter);
