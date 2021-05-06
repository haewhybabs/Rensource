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
        fontSize:18
    }
})