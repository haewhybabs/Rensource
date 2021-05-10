import React, { Component } from 'react';
import { View, Text,Image,ScrollView } from 'react-native';
import Header from '../Header';
import Styles from './styles';
import {Icon} from 'react-native-elements';
import CartFooter from '../Footer/CartFooter';
import Message from '../../common/message';
import {addToCartAction,removeFromCartAction} from '../../constants/const_functions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item:props.navigation.getParam('item'),
      message:false
    };
  }
  updateState(name, value) {
		this.setState({ [name]: value });
	}
  componentWillUnmount(){
    this.setState({message:false});
  }
  render() {
    const {message} = this.state;
    const item = this.props.navigation.getParam('item')
    const cart = this.props.cart;
    return (
      <>
        <Header name="Details" navigation={this.props.navigation} cartLength={cart.length}/>
        <ScrollView>
          <View style={Styles.headerBackground}>
            {/* Message */}
            {
              message &&((
                <Message 
                  updateState={this.updateState.bind(this)}
                  content='Item added to cart successfully'
                />
              ))
            }
            <Image 
              source = {item.image}                         
              style={Styles.detailImage}      
            />
          </View>
          {/* Content */}
          <View style={Styles.contentHeaderContainer}>
            <Text style={Styles.contentHeader}>{item.name}</Text>
            <Text style={Styles.detailContent}>{item.description}</Text>
            <Text style={Styles.detailPrice}>N{item.price}</Text>
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
        <CartFooter 
          navigation={this.props.navigation} 
          item={item}
          updateState={this.updateState.bind(this)}
        />
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
export default connect(mapStateToProp,mapActionsToProps)(Details);
