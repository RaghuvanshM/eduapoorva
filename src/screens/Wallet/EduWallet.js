import React, {Component} from 'react';
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Pressable,
  StyleSheet,
} from 'react-native';
import {CustomFont, Icon, Header} from '../../controls';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import styles from './style';
import JsonData from '../../controls/JsonData';

export default class EduWallet extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
        <Header  headerTxt="EDUWALLET" />

        <ImageBackground style={{flex: 1}} source={Images.backgroundBg}>
 
      <View style ={{flex:1,marginTop:40}}>
            
          <View style={styles.userImageView}>
            <Image style={styles.userImage} source={Images.user} />
            <CustomFont style={styles.userNameTxt} text="ARYAN KUMAR" />
            <CustomFont style={styles.coinsTxt} text="TOTAL EDU-COINS" />
            <CustomFont style={styles.coinsTxt1} text="100C" />
            </View>

            {JsonData.EduWallet.map(item => {
             return <View style ={{marginTop:10 ,alignItems:'center'}}>
                <CustomFont style={styles.coinsTxt3} text= {item} />
                <View style={styles.horzontalLine} />
              </View>
            })}

</View>
         
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
