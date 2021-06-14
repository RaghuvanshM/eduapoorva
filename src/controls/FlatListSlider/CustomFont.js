import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import AppKeys from "../service/AppKeys";
import I18n from "../languages";
import ChangeLanguage from "../languages/ChangeLanguage";

class CustomFont extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    ChangeLanguage.updateLanguage(this.props.selectedLang);
  }

  render() {
    const { ThemeColor } = this.props;
    return (
    <View>  
      <Text {...this.props}
        style={[
          {
            fontFamily: AppKeys.AvenirRegularFont,
            color: ThemeColor.textColor,
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
  ThemeColor: state.ThemeColor,
  selectedLang: state.selectedLang,
});
export default connect(mapStateToProps)(CustomFont);
