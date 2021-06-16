import {
    StyleSheet
  } from 'react-native';
import Colors from '../../utils/Colors';


export default StyleSheet.create({ 

    MainContainer:{marginHorizontal: 16, marginVertical: 10, flex: 1},
    columnWrap:{flexWrap: 'wrap', flex: 1, marginTop: 5},
    renderItemMain:{
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 4,
      },
      subContainer:{
        width: '100%',
        aspectRatio: 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      CeneterView: {flexDirection: 'row', justifyContent: 'space-between'},
      customeTxt:{color: Colors.white, alignSelf: 'center', marginTop: 5},
      imageCentered: {width: 30, height: 30, marginStart: 20,resizeMode:"contain"},
      selectedImage:{
        width: 35,
        height: 35,
        position: 'absolute',
        top: -10,
        right: -10,
        resizeMode:"contain"
      }
})