import React, { Component } from 'react';
import { View, Text,StatusBar } from 'react-native';
import Styles from './styles';
import {backgroundColor} from '../../constants/const_strings';
import {Icon} from 'react-native-elements';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View style={Styles.container}>
        <StatusBar backgroundColor={backgroundColor} barStyle="dark-content" />
        <View style={Styles.wrapper}>
            <Icon 
                name="arrow-back-ios"
                size={30}
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
                        <View style={{...Styles.searchIconBackground,marginLeft:10,marginRight:-10}}> 
                            <Icon 
                                name="shopping-cart"
                            />
                        </View>
                    </>
                ))}
            </View>
        </View>
    </View>
    );
  }
}
