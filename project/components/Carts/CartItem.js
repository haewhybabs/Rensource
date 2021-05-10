import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import Styles from './styles';
import {Icon} from 'react-native-elements';
import AntIcon from "react-native-vector-icons/AntDesign";
import {addToCartAction,removeFromCartAction,updateQuantityCartAction} from '../../constants/const_functions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  updateQuantity=(status,item)=>{
    if(!status){
        if(item.qty===1){
            this.props.removeFromCartAction({id:item.id})
        }
    }
    this.props.updateQuantity(status,item)
  }
  render() {
      const item=this.props.item;
    return (
        <View style={Styles.cardContainer}>
            <View style={Styles.cardCover}>
                <View style={Styles.cardHeaderRow}>
                    <Image 
                    source = {item.image}                         
                    style={Styles.cartImage}      
                    />
                    <View>
                    <Text style={Styles.cardItemName}>{item.name}</Text>
                    <Text style={Styles.cardItemPrice}>N{item.price}</Text>
                </View>
            </View>
            <View style={Styles.cardBreak}/>
                <View style={Styles.cardFooterRow}>
                    <View style={Styles.deleteRow}>
                        <Icon 
                            name="delete"
                            color="#E25A59"
                            size={30}
                            onPress={()=>this.props.removeCart(item.id)}
                        />
                        <Text style={Styles.deleteRowText}>Delete</Text>
                    </View>
                    <View style={Styles.quantityRow}>
                        <View style={Styles.quantityCover}>
                            <AntIcon name="minus" color="#123CD3" size={20} onPress={()=>this.updateQuantity(false,item)}/>
                        </View>
                        <Text style={Styles.quantityText}>{item.qty}</Text>
                        <View style={Styles.quantityCover}>
                            <AntIcon name="plus" color="#123CD3" size={20} onPress={()=>this.updateQuantity(true,item)}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
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
      removeFromCartAction
    },dispatch)
  }
  export default connect(mapStateToProp,mapActionsToProps)(CartItem);
