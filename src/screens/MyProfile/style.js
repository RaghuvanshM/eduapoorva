import {
    StyleSheet
  } from 'react-native';
import Colors from '../../utils/Colors';


export default StyleSheet.create({  

  horizontalLine: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#914900',
    marginVertical: 10,
  },
  userImageView:{
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 10,

    alignItems: 'center',
  },
  userImage:{width: 80, height: 80},
  editContainer:{
    backgroundColor: '#914900',
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 60,
  },
  editPencilView:{color: Colors.white, fontSize: 18},
  userNameTxt:{
    color: Colors.orange,
    fontSize: 13,
    fontWeight: 'bold',
    marginStart: 20,
  },
  personalInfoView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pencilImage:{width: 20, height: 20,resizeMode:"contain"},
  userIcons:{width: 20, height: 20,resizeMode:"contain"},
  saveBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.orange,
    height:37,
    width:160,
    borderRadius:20,
    alignSelf:'center',
    borderWidth:0.5,
    borderColor:Colors.white,
    marginBottom:10
  }

})