import { StyleSheet, Dimensions } from 'react-native';
import { backgroundColor, textColor } from '../../constants/const_strings';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    headerBackground: {
        backgroundColor:'#F9FAFC',
        height:250,
        width:'100%',
        alignItems:'center',
        justifyContent: 'center',
    },
    detailImage:{
        height:200,
        width:350,
        borderRadius:5
    },
    contentHeader:{
        fontSize:20,
    },
    contentHeaderContainer:{
        margin:20
    },
    detailContent:{
        color:textColor,
        marginTop:10,
        lineHeight:26,
        fontSize:18
    },
    detailPrice:{
        marginTop:20,
        fontWeight:'bold',
        fontSize:20
    },
    borderContainer:{
        borderTopColor:'#F9FAFC',
        borderBottomColor:'#F9FAFC',
        borderTopWidth:5,
        borderBottomWidth:5,
        height:70,
        justifyContent:'center'
    },
    borderContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20
    },
    borderText:{
        fontSize:18
    },
    reviewWrapper:{
        margin:20
    },
    reviewContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    reviewHeader:{
        fontSize:18
    },
    reviewView:{
        color:'#227EFF',
        fontSize:16
    },
    ratingIconContainer:{
        marginTop:15,
        flexDirection:'row'
    },
    ratingNumber:{
        fontSize:15,
        marginLeft:10
    },
    ratingText:{
        fontSize:14,
        marginTop:20,
        lineHeight:24,
        color:textColor
    },
    reviewerContainer:{
        flexDirection:'row',
        marginTop:10
    },
    reviewerImage:{
        height:40,
        width:40,
        borderRadius:40/2
    },
    reviewerText:{
        fontSize:16,
        margin:8
    },
    breakout:{
        height:15,
        width:'100%',
        backgroundColor:'#F4F5F7',
        marginBottom:20
    }
})