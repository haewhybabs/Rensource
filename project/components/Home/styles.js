import { StyleSheet, Dimensions } from 'react-native';
import { backgroundColor, textColor } from '../../constants/const_strings';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex:1,
        marginTop:15,
        backgroundColor:'#FFFFFF'
    },
    headerText:{
        margin:15,
        fontSize:19,
        fontWeight:"600"
    },
    borderContainer:{
        borderTopColor:'#DFE5EB',
        borderBottomColor:'#DFE5EB',
        borderTopWidth:0.8,
        borderBottomWidth:0.8,
        height:70,
        justifyContent:'center'
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,
        marginBottom:10,
        width:'100%',
    },
    subHeaderContainer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    subHeaderText:{
        fontSize:18
    },
    verticalLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#DFE5EB',
    },
    inputContainerStyle: {
        borderWidth: 0,
        padding: 2,
        height: 50,
        backgroundColor: '#EFF3F8',
    },
    containerStyle:{
        paddingLeft: 0, 
        paddingRight: 0,
        backgroundColor:'#ffffff',
        borderWidth:0,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    searchBarContainer:{
        margin:15
    },
    bannerWrapper:{
        width:'100%',
        marginTop:-15
    },
    bannerContainer:{
        height:150,
        margin:25,
        borderRadius:10,
        backgroundColor:'#003377',
    },
    bannerContent:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        height:'100%',
        marginLeft:10,
        marginRight:10
    },
    bannerText:{
        color:'#fff',
        fontSize:18,
        width:'50%',
        fontWeight:'bold'
    },
    bannerButton:{
        borderRadius: 5,
        backgroundColor:'#237EFF',
        height: 50,
        width:120,
        alignSelf:'center',
    },
    bannerButtonContainer:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    bannerButtonText:{
        fontSize:15,
        color:'#fff'
    },
    productHeader:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        marginLeft:20,
        marginRight:20
    },
    productHeaderWrapper:{
        flex:1
    },
    productHeaderCategory:{
        height:70,
        width:70,
        borderRadius:5,
        backgroundColor:'#237EFF',
        justifyContent:'center'
    },
    productHeaderPopular:{
        height:70,
        width:70,
        borderRadius:5,
        backgroundColor:'#EE6F44',
        justifyContent:'center'
    },
    productHeaderRecommended:{
        height:70,
        width:70,
        borderRadius:5,
        backgroundColor:'#7E42F6',
        justifyContent:'center'
    },
    productHeaderShops:{
        height:70,
        width:70,
        borderRadius:5,
        backgroundColor:'#06944F',
        justifyContent:'center'
    },
    productHeaderTextContainer:{
        width:'100%',
        alignItems:'center'
    },
    productHeaderText:{
        marginTop:10,
        fontSize:14,
        fontWeight:'600'
    },
    productItemsContainer:{
        flexDirection:'row',
        flex:1,
        margin:10,
        flexWrap:'wrap',
        margin:20
    },
    productItemWrapper:{
        flexBasis:'33.3%',
        marginBottom: 10,
    },
    productItemImage:{
        width:120,
        height:120,
        borderRadius:10
    },
    productItemText:{
       marginTop:5,
       fontSize:12,
       width:'50%',
       color:textColor
    },
    productItemPrice:{
        marginTop:5,
        fontWeight:'bold'
    }
})