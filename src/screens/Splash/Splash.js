import React, { Component } from "react";
import { Text } from 'react-native';
import { connect } from "react-redux";
import {saveUserLanguage} from "../../store/action";

 class Splash extends Component {

  componentDidMount() {
    const { replace } = this.props.navigation;

    setTimeout(() => {
      this.props.saveUserLanguage('hi');
      replace("DashboardScreen");
    }, 1000);
  }

  render() {

    return (
      <Text onPress={()=>this.props.navigation.navigate('authStack')}>Splash Screen</Text>
    );
  }
}


const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = { saveUserLanguage };
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
