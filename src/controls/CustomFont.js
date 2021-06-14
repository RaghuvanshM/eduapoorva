import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import I18n from "../languages";
import ChangeLanguage from "../languages/ChangeLanguage";

class CustomFont extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("this.props.selectedLang",this.props.selectedLang); 
   ChangeLanguage.updateLanguage(this.props.selectedLang);
  }

  render() {
    return (
    <View>  
      <Text {...this.props}
        style={[
          {
            fontFamily: "ABeeZee-Regular",
          },
          this.props.style,
        ]}
      >
       {this.props.Text ? I18n.t(this.props.Text) : this.props.text} 
      </Text>
       {this.props.children}
      </View> 
    );
  }
}

const mapStateToProps = (state) => ({
  selectedLang: state.selectedLang,
});
export default connect(mapStateToProps)(CustomFont);
