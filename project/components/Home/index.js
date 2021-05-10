import React, { Component } from 'react';
import { View, Text,StatusBar,TouchableOpacity} from 'react-native';
import Styles from './styles'
import { SearchBar,Badge } from 'react-native-elements';
import {backgroundColor,ProductItems} from '../../constants/const_strings';
import { Icon } from 'react-native-elements';
import Products from './Products';
import ProductHeader from './ProductHeader';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../Footer';
import {addToCartAction,removeFromCartAction} from '../../constants/const_functions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:''
    };
  }
  updateSearch = (search) => {
    this.setState({ search });
  };
  render() {
    const cart=this.props.cart;
    const search= this.state.search;
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
            <TouchableOpacity style={Styles.subHeaderContainer} onPress={()=>this.props.navigation.navigate('Carts')}>
              <View>
                <Icon
                name='shopping-cart'
                />
                <Badge
                value={cart.length}
                badgeStyle={{backgroundColor: '#EE6F44'}}
                containerStyle={Styles.badgeStyle}
                />
              </View>
              
              <Text style={Styles.subHeaderText}>Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={Styles.searchBarContainer}>
            <SearchBar
              placeholder="Search merchbuy"
              onChangeText={this.updateSearch}
              value={search}
              containerStyle={Styles.containerStyle}
              inputContainerStyle={Styles.inputContainerStyle}
              inputStyle={Styles.inputStyle}
            />
          </View>
          <View style={Styles.bannerWrapper}>
            <ScrollView horizontal={true}>
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

              <View style={{...Styles.bannerContainer,backgroundColor:'#EE6F44'}}>
                <View style={Styles.bannerContent}>
                  <Text style={Styles.bannerText}>Having any <Text style={{color:'#F39677'}}>issues</Text> with your order?</Text>
                  <TouchableOpacity style={Styles.bannerButton} onPress={()=>this.props.navigation.navigate('Order')}>
                    <View style={Styles.bannerButtonContainer}>
                        <Text style={Styles.bannerButtonText}>Contact Us</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
          <ProductHeader />
          <View style={Styles.productItemsContainer}>
            {ProductItems.filter((val)=>{
              if(search===''){
                return val;
              }
              else if(val.name.toLowerCase().includes(search.toLowerCase())){
                return val;
              }
            }).map((value,index)=>(
              <Products item={value} navigation={this.props.navigation} key={index}/>
            ))}
          </View>
        </ScrollView>
        {/* Footer */}
        <Footer navigation={this.props.navigation}/>
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
    addToCartAction
  },dispatch)
}
export default connect(mapStateToProp,mapActionsToProps)(Home);