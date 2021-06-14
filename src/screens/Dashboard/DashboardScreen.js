import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView
} from "react-native";
import {CustomFont , Icon} from '../../controls'

export default class DashboardScreen extends Component {

  render() {
    return (
      <SafeAreaView style ={{flex:1,justifyContent:'center'}}>
       <CustomFont style ={{fontWeight:'bold',marginStart:20}} Text ="Hello" />
      </SafeAreaView>
   
    );
  }
}
