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

export default class ProfileTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={[{marginVertical: 5}, this.props.styles]}>
        <View
          style={[
            styles.searchContainer,
            this.props.style,
          ]}>

           <Image
              style={styles.micStyle}
              source={this.props.mainImage}
            />

          <TextInput
            {...this.props}
            spellCheck={false}
            autoCorrect={false}
            style={[styles.textInputStyle, {color: Colors.placeholderColor}]}
          />

          
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

    width: '100%',
    alignItems: 'center',
  },
  textInputStyle: {
    fontFamily: 'ABeeZee-Regular',
    //paddingStart: 8,
    margin: 0,
    padding: 0,
    width: '90%',
    borderBottomColor:'#000',
    borderBottomColor: Colors.gray, // Add this to specify bottom border color
    borderBottomWidth: 0.3 ,
    marginStart:8


  },
  micStyle: {
    width: 21,
    height: 21,
    padding: 4,
    resizeMode:"contain",
    
  },
 
});

// const mapStateToProps = (state) => ({ ThemeColor: state.ThemeColor });
// export default connect(mapStateToProps)(SearchTextInput);
