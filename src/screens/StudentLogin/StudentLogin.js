import React, { Component } from "react";
import { Text } from 'react-native';
export default class Splash extends Component {

  render() {

    return (
      <Text onPress={()=>this.props.navigation.navigate('authStack')}>Splash Screen</Text>
    );
  }
}
