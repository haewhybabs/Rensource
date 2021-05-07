import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import Styles from './styles';
import {Icon} from 'react-native-elements';
import AntIcon from "react-native-vector-icons/AntDesign";

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <View style={Styles.cardContainer}>
            <View style={Styles.cardCover}>
                <View style={Styles.cardHeaderRow}>
                    <Image 
                    source = {require('../../assets/images/shoe.png')}                         
                    style={Styles.cartImage}      
                    />
                    <View>
                    <Text style={Styles.cardItemName}>2019 Vintage Coca Cola</Text>
                    <Text style={Styles.cardItemPrice}>N18,099.09</Text>
                </View>
            </View>
            <View style={Styles.cardBreak}/>
                <View style={Styles.cardFooterRow}>
                    <View style={Styles.deleteRow}>
                        <Icon 
                            name="delete"
                            color="#E25A59"
                            size={30}
                        />
                        <Text style={Styles.deleteRowText}>Delete</Text>
                    </View>
                    <View style={Styles.quantityRow}>
                        <View style={Styles.quantityCover}>
                            <AntIcon name="minus" color="#123CD3" size={20} />
                        </View>
                        <Text style={Styles.quantityText}>24</Text>
                        <View style={Styles.quantityCover}>
                            <AntIcon name="plus" color="#123CD3" size={20} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
  }
}
