import React, {Component} from 'react';
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Pressable,
} from 'react-native';
import {CustomFont, Icon, Header} from '../../controls';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import JsonData from '../../controls/JsonData';
import styles from './style';
import {ProfileTextInput} from '../../controls';

export default class EditProfile extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
        <Header isBack headerTxt="MY PROFILE"  />

        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={{flex: 1, marginHorizontal: 16}}>
            <ImageBackground style={{flex: 1}} source={Images.backgroundBg}>
              
              <View style={styles.userImageView}>
                <Image style={styles.userImage} source={Images.user} />
                <CustomFont style={styles.userNameTxt} text="ARYAN KUMAR" />
              </View>

              <View style={styles.horizontalLine} />

              <View>
                <View style={styles.personalInfoView}>
                  <CustomFont Text="Personal Information" />
                </View>

                {JsonData.profileData.map((item, index) => {
                  return (
                    <ProfileTextInput
                      mainImage={item.images}
                      placeholder={item.text}
                    />
                  );
                })}
              </View>

              <Pressable
                style={styles.saveBtn}>
                    <CustomFont style ={{color:Colors.white}} text ="Save"/>
                </Pressable>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
