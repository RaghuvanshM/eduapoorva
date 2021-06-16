import React, {Component} from 'react';
import {
  TextInput,
  Text,
  View,
  Platform,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import Icon from '../controls/IconNB';
import Images from '../utils/Images';
import Colors from '../utils/Colors';
//import { connect } from "react-redux";

export default class SearchTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      isSelected: true,
    };
  }

  componentDidMount() {}

  focus = isFocused => () => {
    this.setState({
      focused: isFocused,
    });
    this.props.onFocus && this.props.onFocus();
  };

  render() {
    const {focused} = this.state;
    return (
      <View style={[{marginVertical: 5}, this.props.styles]}>
        <View
          style={[
            styles.searchContainer,
            {backgroundColor: Colors.white},
            this.props.style,
          ]}>
          <TextInput
            {...this.props}
            placeholderTextColor={Colors.placeholderColor}
            underlineColorAndroid="transparent"
            spellCheck={false}
            autoCorrect={false}
            style={[styles.textInputStyle, {color: Colors.placeholderColor}]}
          />

          <Pressable style={{position: 'absolute', right: 50}}>
            <Image
              resizeMode="contain"
              style={styles.micStyle}
              source={Images.mic}
            />
          </Pressable>
          <Pressable style={styles.cameraView}>
            <Image
              resizeMode="contain"
              style={styles.cameraStyle}
              source={Images.doubts}
            />
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    elevation: 1,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderColor: Colors.orange,
    borderWidth: 0.6,
    width: '100%',
    shadowOffset: {height: 1, width: 0},
    alignItems: 'center',
  },
  textInputStyle: {
    fontFamily: 'ABeeZee-Regular',
    borderColor: Colors.orange,
    paddingStart: 8,
    // alignSelf: "center",
    margin: 0,
    padding: 0,
    // flex:1,
    width: '90%',
  },
  micStyle: {
    width: 16,
    height: 16,
    padding: 4,
  },
  cameraStyle: {
    padding: 4,
    width: 40,
    height: 40,
  },
  cameraView: {position: 'absolute', right: -10},
});

// const mapStateToProps = (state) => ({ ThemeColor: state.ThemeColor });
// export default connect(mapStateToProps)(SearchTextInput);
