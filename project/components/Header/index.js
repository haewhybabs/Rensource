import React, { Component } from 'react';
import { View, Text,StatusBar,TouchableOpacity } from 'react-native';
import Styles from './styles';
import {backgroundColor} from '../../constants/const_strings';
import {Icon} from 'react-native-elements';
import { Badge } from 'react-native-elements';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
      const cartLength = this.props.cartLength;
    return (
    <View style={Styles.container}>
        <StatusBar backgroundColor={backgroundColor} barStyle="dark-content" />
        <View style={Styles.wrapper}>
            <Icon 
                name="arrow-back-ios"
                size={30}
                onPress={()=>this.props.navigation.goBack()}
            />
            <Text style={Styles.headerName}>{this.props.name}</Text>
            <View style={Styles.detailsCartShow}>
                {this.props.name=="Details"&&((
                    <>
                        <View style={Styles.searchIconBackground}>
                            <Icon 
                                name="search"
                            />
                        </View>
                        <TouchableOpacity style={{...Styles.searchIconBackground,marginLeft:10,marginRight:-10}} onPress={()=>this.props.navigation.navigate('Carts')}> 
                            <Icon 
                                name="shopping-cart"
                            />
                            <Badge
                            value={cartLength}
                            badgeStyle={{backgroundColor: '#EE6F44'}}
                            containerStyle={Styles.badgeStyle}
                            />
                        </TouchableOpacity>
                    </>
                ))}
            </View>
        </View>
    </View>
    );
  }
}
