import React, { Component } from "react";
import { StyleSheet, View, Text ,Dimensions, Platform, PixelRatio} from "react-native";
import { connect } from "react-redux";
import I18n from "../languages";
import ChangeLanguage from "../languages/ChangeLanguage";

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;


class CustomFont extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  actuatedNormalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
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
            fontSize : this.actuatedNormalize(13) 
            
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
