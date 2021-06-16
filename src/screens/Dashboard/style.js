import {
    StyleSheet
  } from 'react-native';
import Colors from '../../utils/Colors';


export default StyleSheet.create({

    rounderd: {
        borderColor: Colors.gray,
        borderWidth: 1,
        // padding: 3,
        //borderRadius: 100,
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      coinsStyles: {width: 17, height: 17},
      coinsTxt: {
        fontSize: 8,
        marginEnd: 10,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.orange,
      },
      badgesView: {
        borderColor: Colors.orange,
        borderWidth: 1,
        width: 17,
        height: 17,
        borderRadius: 17 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        position: 'absolute',
        left: 20,
        top: -5,
      },
      bagesTxt: {fontSize: 11, fontWeight: 'bold', color: Colors.orange},
      textInfo: {
        color: Colors.orange,
        alignSelf: 'center',
        marginHorizontal: 36,
        textAlign: 'center',
      },
      horizontalLine: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#de760a',
        marginVertical: 10,
      },
      MainContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        height: 35,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      listImag: {width: 35, height: 35},
      notificationImg: {width: 30, height: 30},
      profileView: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
      userProfileImg: {width: 80, height: 80},
      userNameTxt:{
        color: Colors.orange,
        fontSize: 13,
        fontWeight: 'bold',
      },
      badgesView:{flexDirection: 'row', marginTop: 10, padding: 3},
      badgeTxtView: {flexDirection: 'row', alignSelf: 'center'},
      subViewConatiner:{flex: 1, marginBottom: 55},
      columnWrapper: {flexWrap: 'wrap', flex: 1, marginTop: 5},
      popularCousesTxt:{marginVertical: 5, marginStart: 5 , fontWeight:'bold'},
      earnCardView:{
        marginVertical: 8,
        marginHorizontal: 8,
        fontWeight: '800',
      },
      renderItemMainView: {
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 4,
      },
      renderImageBg: {
        width: '100%',
        aspectRatio: 2,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:"stretch"
      },
      centerImageRenderItem:{
        marginStart: 15,
        alignSelf: 'center',
        width: 30,
        height: 30,
        resizeMode:"contain"
      },
      popularCouseMainView:{
        aspectRatio: 1.3,
        height: 120,
        marginHorizontal: 5,
        marginVertical: 4,
        borderRadius: 6,
        backgroundColor: Colors.white,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
      }
      ,
      imageBG: {
        aspectRatio: 1.3,
        width: '100%',
         resizeMode:"cover"
        // alignItems: 'center',
        //justifyContent: 'center',
      },
      logoImg:{width: 50, height: 50, margin: 8},
      renderSubContainer: {
        width: 14,
        height: 14,
       
        position: 'absolute',
        right: 0,
        borderTopEndRadius: 6,
        borderBottomStartRadius: 20,
      },
      renderTxt:{fontSize: 13, fontWeight: '700'},
      subRenderTxt:{color: Colors.gray, marginTop: 3},
      buyContainer:{
       
        width: 50,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        right: 10,
        bottom: -10,
      },
      buyTxt:{
        color: Colors.white,
        fontWeight: '700',
        fontSize: 12,
        marginTop: -2,
      },
      earningMainView: {
        borderRadius: 8,
        backgroundColor: Colors.white,
        elevation: 4,
        height: 100,
        width: '100%',
      },
      earningImgBg: {
        // aspectRatio: 2,
        width: '100%',
        height: 100,
        resizeMode:"cover"
      },
      networkImg:{
        width: 100,
        height: 100,
        bottom: -12,
        borderRadius: 8,
        resizeMode:"contain"
      },
      shareTxt: {
        fontSize: 12,
        color: Colors.gray,
        marginTop: 5,
      },
      shareView: {
        backgroundColor: Colors.orange,
        borderRadius: 6,
        width: 70,
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: 8,
      },
      sharingTxt:{color: Colors.white, fontSize: 13},
      shareIcon: {
        color: Colors.white,
        fontSize: 14,
        marginStart: 7,
      },
      appWorkView:{
        flex: 1,
        marginVertical: 10,
        height: 100,
        borderRadius: 10,
        width: '100%',
      },
      ApImageBg:{width: '100%', height: 100, borderRadius: 10,resizeMode:"stretch"},
      ApSubContaiiner: {flexDirection: 'row', flex: 1, marginHorizontal: 10},
      AplistImages:{width: 50, height: 50, alignSelf: 'center'},
      CustomeTxtView:{margin: 5, flex: 1, alignSelf: 'center'},
      appTxtAp:{fontSize: 13, color: Colors.white},
      centerTxtAp:{flexDirection: 'row',justifyContent:'space-between'},
      txtCustom:{
        fontSize: 12,
        color: Colors.gray,
        marginTop: 5,
        color: Colors.white,
       
      }

 })