import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './styles'
import { Icon } from 'react-native-elements';
export default class ProductHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <View style={Styles.productHeader}>
            <View style={Styles.productHeaderWrapper}>
                <View style={Styles.productHeaderCategory}>
                    <Icon 
                    name="assignment"
                    color="#fff"
                    size={35}
                    />
                </View>
                <Text style={Styles.productHeaderText}>Product Category</Text>
            </View>
            
            <View style={Styles.productHeaderWrapper}>
                <View style={Styles.productHeaderPopular}>
                    <Icon 
                    name="local-fire-department"
                    color="#fff"
                    size={35}
                    />
                </View>
                <Text style={Styles.productHeaderText}>Product Category</Text>
            </View>
            
            <View style={Styles.productHeaderWrapper}>
                <View style={Styles.productHeaderRecommended}>
                    <Icon 
                    name="clean-hands"
                    color="#fff"
                    size={35}
                    />
                </View>
                <Text style={Styles.productHeaderText}>Recommended</Text>
            </View>
            <View style={Styles.productHeaderWrapper}>
                <View style={Styles.productHeaderShops}>
                    <Icon 
                    name="shopping-bag"
                    color="#fff"
                    size={35}
                    />
                </View>
                <Text style={Styles.productHeaderText}>Shops</Text>
            </View>
        </View>
    );
  }
}
