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
    return (
        <View style={Styles.productItemsContainer}>
            <TouchableOpacity style={Styles.productItemWrapper} onPress={()=>this.props.navigation.navigate('Details')}>
                <Image 
                    source = {require('../../assets/images/index.png')}                         
                    style={Styles.productItemImage}      
                />
                <Text style={Styles.productItemText} numberOfLines={2}>Free sample small tote bag gucci</Text>
                <Text style={Styles.productItemPrice}>₦900 - ₦1,500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.productItemWrapper}>
                <Image 
                    source = {require('../../assets/images/shoe.png')}                         
                    style={Styles.productItemImage}      
                />
                <Text style={Styles.productItemText} numberOfLines={2}>Free sample small tote bag gucci</Text>
                <Text style={Styles.productItemPrice}>₦900 - ₦1,500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.productItemWrapper}>
                <Image 
                    source = {require('../../assets/images/cocacola.png')}                         
                    style={Styles.productItemImage}      
                />
                <Text style={Styles.productItemText} numberOfLines={2}>Free sample small tote bag gucci</Text>
                <Text style={Styles.productItemPrice}>₦900 - ₦1,500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.productItemWrapper}>
                <Image 
                    source = {require('../../assets/images/item1.png')}                         
                    style={Styles.productItemImage}      
                />
                <Text style={Styles.productItemText} numberOfLines={2}>Free sample small tote bag gucci</Text>
                <Text style={Styles.productItemPrice}>₦900 - ₦1,500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.productItemWrapper}>
                <Image 
                    source = {require('../../assets/images/item.png')}                         
                    style={Styles.productItemImage}      
                />
                <Text style={Styles.productItemText} numberOfLines={2}>Free sample small tote bag gucci</Text>
                <Text style={Styles.productItemPrice}>₦900 - ₦1,500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.productItemWrapper}>
                <Image 
                    source = {require('../../assets/images/box.png')}                         
                    style={Styles.productItemImage}      
                />
                <Text style={Styles.productItemText} numberOfLines={2}>Free sample small tote bag gucci</Text>
                <Text style={Styles.productItemPrice}>₦900 - ₦1,500</Text>
            </TouchableOpacity>
        </View>
    
    );
  }
}
