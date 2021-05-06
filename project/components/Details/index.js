import React, { Component } from 'react';
import { View, Text,Image,ScrollView } from 'react-native';
import Header from '../Header';
import Styles from './styles';
import {Icon} from 'react-native-elements';
import CartFooter from '../Footer/CartFooter';
import Message from '../../common/message'

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <Header name="Details"/>
        <ScrollView>
          <View style={Styles.headerBackground}>
            <Message />
            <Image 
              source = {require('../../assets/images/shoe.png')}                         
              style={Styles.detailImage}      
            />
          </View>
          {/* Content */}
          <View style={Styles.contentHeaderContainer}>
            <Text style={Styles.contentHeader}>NIKE Huarache 2019</Text>
            <Text style={Styles.detailContent}>Get comfy and comfortable with the new 2019 designer
            sneaker for all your events </Text>
            <Text style={Styles.detailPrice}>N45,000 - N80,000</Text>
          </View>
          {/* Description */}
          <View style={Styles.borderContainer}>
            <View style={Styles.borderContent}>
              <Text style={Styles.borderText}>Product Description</Text>
              <Icon 
                name="arrow-forward-ios"
                size={25}
              />
            </View>
          </View>
          {/* Review and Rating */}
          <View style={Styles.reviewWrapper}>
            <View style={Styles.reviewContainer}>
              <Text style={Styles.reviewHeader}>Review and Ratings</Text>
              <Text style={Styles.reviewView}>View all</Text>
            </View>
            <View style={Styles.ratingIconContainer}>
              <Icon name="star" color="#FFCA42" size={20}/>
              <Icon name="star" color="#FFCA42" size={20}/>
              <Icon name="star" color="#FFCA42" size={20}/>
              <Icon name="star-outline" size={20}/>
              <Icon name="star-outline" size={20}/>
              <Text style={Styles.ratingNumber}>3.0</Text>
            </View>
            <Text style={Styles.ratingText}>This is the best product I have used in a long while and the
              size fits perfectly and I love the colors!!!!!
            </Text>
            <View style={Styles.reviewerContainer}>
              <Image 
                source = {require('../../assets/images/user.png')}                         
                style={Styles.reviewerImage}      
              />
              <Text style={Styles.reviewerText}>Segun Arinze</Text>
            </View>
          </View>
        </ScrollView>
        <CartFooter />
      </>
    );
  }
}
