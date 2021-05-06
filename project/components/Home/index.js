import React, { Component } from 'react';
import { View, Text,StatusBar,TouchableOpacity} from 'react-native';
import Styles from './styles'
import { SearchBar } from 'react-native-elements';
import {backgroundColor} from '../../constants/const_strings';
import { Icon } from 'react-native-elements';
import Products from './Products';
import ProductHeader from './ProductHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../Footer';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={Styles.container}>
        <StatusBar backgroundColor={backgroundColor} barStyle="dark-content" />
        <Text style={Styles.headerText}>Trollbasket</Text>
        <View style={Styles.borderContainer}>
          <View style={Styles.headerContainer}>
            <View style={Styles.subHeaderContainer}>
              <Icon
              name='location-pin'
              color='#237EFF' 
              />
              <Text style={Styles.subHeaderText}>Lagos</Text>
              <Icon
              name="keyboard-arrow-down"
              color="#000000"
              size={30}
              />
            </View>
            <View style={Styles.verticalLine}></View>
            <View style={Styles.subHeaderContainer}>
              <Icon
              name='file-copy'
              color='#7E42F5' 
              />
              <Text style={Styles.subHeaderText}>My Orders</Text>
            </View>
            <View style={Styles.verticalLine}></View>
            <View style={Styles.subHeaderContainer}>
              <Icon
              name='shopping-cart'
              />
              <Text style={Styles.subHeaderText}>Cart</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={Styles.searchBarContainer}>
            <SearchBar
              placeholder="Search merchbuy"
              onChangeText={this.updateSearch}
              // value={search}
              containerStyle={Styles.containerStyle}
              inputContainerStyle={Styles.inputContainerStyle}
              inputStyle={Styles.inputStyle}
            />
          </View>
          <View style={Styles.bannerWrapper}>
            <View style={Styles.bannerContainer}>
              <View style={Styles.bannerContent}>
                <Text style={Styles.bannerText}>Having any <Text style={{color:'#F39677'}}>issues</Text> with your order?</Text>
                <TouchableOpacity style={Styles.bannerButton} onPress={()=>this.props.navigation.navigate('Order')}>
                  <View style={Styles.bannerButtonContainer}>
                      <Text style={Styles.bannerButtonText}>Contact Us</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ProductHeader />
          <Products navigation={this.props.navigation}/>
        </ScrollView>
        {/* Footer */}
        <Footer />
      </View>
    );
  }
}
