import { StyleSheet, Dimensions } from 'react-native';
import { backgroundColor, textColor } from '../constants/const_strings';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    messageContainer:{
        borderWidth:2,
        borderColor:'#AEF2D1',
        marginLeft:20,
        marginRight:20,
        height:50,
        borderRadius:5,
        backgroundColor:'#D3FDE9',
        justifyContent: 'center',
    },
    messageRow:{
        margin:5,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    messageWrapper:{
        width:'100%'
    },
    messageContent:{
        fontSize:18,
        
    }

})