import React, { Component } from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';
import Header from '../Header';
import Styles from './styles';
import Message from '../../common/message';
import {ProductItems} from '../../constants/const_strings';
import CartItem from './CartItem';
import { ScrollView } from 'react-native-gesture-handler';
import Products from '../Home/Products';
import {addToCartAction,removeFromCartAction,updateQuantityCartAction,clearCartAction} from '../../constants/const_functions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class Carts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart:props.cart
    };
  }
  removeCart(id){
    this.props.removeFromCartAction({id})
    this.setState({cart:this.props.cart})
  }
  updateQuantity(status,item){
    if(status){
      item.qty=item.qty+1;
    }
    else{
      item.qty = item.qty-1;
    }
    if(item.qty===0){
        this.props.removeFromCartAction({id:item.id});
        this.setState({cart:this.props.cart})
        return
    }
    this.props.updateQuantityCartAction({item})
    this.setState({cart:this.props.cart})
  }
  checkout = ()=>{
    // redirect to payment
    // remote all items from cart;
    this.props.clearCartAction({});
    this.props.navigation.navigate('Checkout');

  }
  render() {
    const carts = this.state.cart;
    const cartItemComponents = [];
    const propsCart = this.props.cart
    let totalAmount=0;
    for(let i=0; i<propsCart.length; i++){
      totalAmount = totalAmount + propsCart[i].price * propsCart[i].qty;
      cartItemComponents.push(
        <CartItem key={i} item={carts[i]} 
        updateQuantity={this.updateQuantity.bind(this)}
        removeCart={this.removeCart.bind(this)}
        />
      )
    }
    return (
      <>
        <Header name="Cart" navigation={this.props.navigation}/>
        <ScrollView>
          <View style={Styles.containerBackground}>
          {/* cart items */}
          {
            cartItemComponents
          }
          </View>
          <View style={Styles.checkoutCardContainer}>
            <View style={Styles.checkoutCardWrapper}>
              <View style={Styles.subTotalRow}>
                <Text style={Styles.totalText}>Subtotal</Text>
                <Text style={Styles.totalText}>N{totalAmount}</Text>
              </View>
              <View style={{...Styles.subTotalRow,marginTop:15}}>
                <Text style={Styles.totalText}>Total</Text>
                <Text style={{...Styles.totalText,fontWeight:'bold'}}>N{totalAmount}</Text>
              </View>
              <TouchableOpacity style={Styles.checkoutButton} onPress={()=>this.checkout()}>
                <Text style={Styles.checkoutText}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.lineBreak} />
          <View style={{...Styles.subTotalRow,margin:20}}>
            <Text style={Styles.recentlyViewText}>Recently View</Text>
            <Text style={Styles.viewAllText}>View all</Text>
          </View>
          {/* Recently Viewed Product */}
          <View style={Styles.productItemsContainer}>
            {
              ProductItems.map((value,index)=>((
                <Products item={value} navigation={this.props.navigation} key={index}/>
              )))
            }
          </View>
        </ScrollView>
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
    addToCartAction,
    updateQuantityCartAction,
    removeFromCartAction,
    clearCartAction
  },dispatch)
}
export default connect(mapStateToProp,mapActionsToProps)(Carts);
