import {
    StyleSheet
  } from 'react-native';
import Colors from '../../utils/Colors';


export default StyleSheet.create({ 

    renderItemView:{
        marginHorizontal: 5,
        marginVertical: 4,
        flex: 0.5,
      },
      imageBgView:{
        width: '100%',
        aspectRatio: 2,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'stretch'
        
      },
      SubView:{flexDirection: 'row', justifyContent: 'space-between'},
      itemTxt:{color: Colors.white, alignSelf: 'center', marginTop: 5},
      containerImage:{width: 30, height: 30, marginStart: 20, resizeMode:"contain"},
      selectedView:{
        width: 35,
        height: 35,
        position: 'absolute',
        top: -10,
        right: -10,
        resizeMode:"contain"
      }
})