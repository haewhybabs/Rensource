import { StyleSheet, Dimensions } from 'react-native';
import { backgroundColor, textColor } from '../../constants/const_strings';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        backgroundColor:'#227EFF',
        flex:1
    },
    markContainer:{
        marginTop:120,
        width:250,
        height:250,
        borderRadius:250/2,
        backgroundColor:"#0350BB",
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    markCover:{
        width:150,
        height:150,
        borderRadius:150/2,
        borderStartColor:'red',
        borderWidth:20,
        borderColor:'#5BD1BF',
        backgroundColor:'#46BCAA',
        alignItems:'center',
        justifyContent:'center'

    },
    checkoutTextContainer:{
        alignItems:'center',
        marginTop:30
    },
    checkoutHeaderText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:24
    },
    checkoutText:{
        color:'#fff',
        marginTop:20,
        fontSize:18
    },
    okayButton:{
        height:60,
        width:'100%',
        backgroundColor:'#fff',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
        
    },
    buttonContainer:{
        margin:20,
        flex:1,
        justifyContent:'flex-end'
    },
    buttonText:{
        color:'#227EFF',
        fontSize:20,
        fontWeight:'bold'
    }
});