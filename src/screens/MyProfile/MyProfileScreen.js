import React, {Component} from 'react';
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Pressable,
} from 'react-native';
import {
  CustomFont,
  Icon,
  Header,
} from '../../controls';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import JsonData from '../../controls/JsonData';
import styles from "./style";

export default class MyProfileScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
       
        <Header headerTxt="MY PROFILE" />

        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={{flex: 1}}>
           
            <ImageBackground
              style={{flex:1 }}
              source={Images.backgroundBg}>
              <View
                style={styles.userImageView}>
                <Image style={styles.userImage} source={Images.user} />

                <Pressable onPress ={()=>navigate("EditProfile")}
                  style={styles.editContainer}>
                  <Icon
                    name="pencil"
                    type="Octicons"
                    style={styles.editPencilView}
                  />
                </Pressable>

                <CustomFont
                  style={styles.userNameTxt}
                  text="ARYAN KUMAR"
                />
              </View>
              <View style={styles.horizontalLine} />
             

            <View
              style={{marginHorizontal: 20}}>
              <View
                style={styles.personalInfoView}>
                <CustomFont Text="Personal Information" />
                <Image
                  style={styles.pencilImage}
                  source={Images.pencil}
                />
              </View>

              {JsonData.profileData.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{flexDirection: 'row', marginVertical: 9}}>
                    <Image
                      style={styles.userIcons}
                      source={item.images}
                    />
                    <CustomFont
                      style={{marginHorizontal: 20}}
                      text={item.text}
                    />
                  </View>
                );
              })}

        
            </View>
           
            <View style={styles.horizontalLine} />

            </ImageBackground>

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

