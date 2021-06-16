import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  StyleSheet
} from 'react-native';
import {CustomFont, Icon, SearchTextInput} from '../controls';
import Images from '../utils/Images';
import Colors from '../utils/Colors';

export default class MainUIComponent extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
       
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
         
          <View style={{flex: 1 ,justifyContent:'space-between'}}>

            <ImageBackground
              resizeMode="contain"
              style={{width: '100%' ,height:200}}
              source={Images.header}>

              {this.props.header}

              </ImageBackground>

              {this.props.Main}




              {/* <ImageBackground
              style={{height: 200, width: '100%' }}
              source={Images.footer}>

              </ImageBackground> */}
          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}




const styles = StyleSheet.create({


})