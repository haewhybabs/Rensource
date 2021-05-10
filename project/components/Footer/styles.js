import { StyleSheet, Dimensions } from 'react-native';
import { backgroundColor, textColor } from '../../constants/const_strings';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        height:100,
        width:'100%',
        backgroundColor:backgroundColor,
    },
    contentWrapper:{
        margin:20,
        flexDirection:'row',
        justifyContent:'space-around',
        flex:1
    },
    contentText:{
        color:textColor,
        fontSize:15
    },
    breakout:{
        height:15,
        width:'100%',
        backgroundColor:'#F4F5F7',
    },
    cartFooterContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        margin:20
    },
    addCartButton:{
        height:50,
        width:180,
        backgroundColor:'#227EFF',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    wishListButton:{
        borderRadius:5,
        height:50,
        width:180,
        borderColor:'#A0B1C1',
        borderWidth:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    addCartText:{
        color:'#fff',
        fontSize:18
    },
    wishListText:{
        fontSize:18
    }
})