import { StyleSheet, Dimensions } from 'react-native';
import { backgroundColor, textColor } from '../../constants/const_strings';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        backgroundColor:backgroundColor,
    },
    wrapper:{
        margin:20,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    headerName:{
        fontSize:18
    },
    detailsCartShow:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    searchIconBackground:{
        backgroundColor: '#EDF2F7',
        alignItems:'center',
        justifyContent: 'center',
        width:35,
        height:35,
        borderRadius:35/2
    }
})