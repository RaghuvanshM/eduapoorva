import {
    StyleSheet
  } from 'react-native';
import Colors from '../../utils/Colors';


export default StyleSheet.create({ 

    userImageView:{
        alignItems:'center',justifyContent:'center',
        
    },
    userImage:{
        width:80,height:80,
    },
    userNameTxt:{
        color:Colors.orange,
        fontWeight:'bold',
       // marginTop:10
    },
    coinsTxt:{
        fontSize:12,
        marginVertical:10
    },
    coinsTxt1:{
      fontWeight:'bold',
      fontSize:15,

    },
    coinsTxt3:{
        fontWeight:'bold',
        fontSize:14.5,
        color:Colors.orange,
        marginVertical:5
      },
      horzontalLine:{
          height:0.6,
          backgroundColor:Colors.gray,
          width:'80%'
      }
})