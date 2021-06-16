import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Pressable,
  Keyboard
} from 'react-native';

import Colors from '../utils/Colors';
import Images from '../utils/Images';
import CustomFont from './CustomFont';
import Icon from './IconNB';
import {withNavigation} from '@react-navigation/compat';
import {DrawerActions, useRoute} from '@react-navigation/native';

class Header extends Component {
  render() {
    const {header2, header2Txt,isBack} = this.props;
    const {toggleDrawer ,goBack} = this.props.navigation;
    return (
      <SafeAreaView style={{}}>
        {header2 ? (
          <View>
            <Icon
              name="arrow-back"
              type="Ionicons"
              style={{color: Colors.orange, fontSize: 22}}
            />

            <CustomFont
              style={{
                fontSize: 16,
                color: Colors.orange,
                fontWeight: 'bold',
              }}
              text={header2Txt}
            />
          </View>
        ) : (
          <View style={{backgroundColor: Colors.orange}}>
            <Pressable
              onPress={() => {
                isBack ? goBack(null)  :
                this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                Keyboard.dismiss();
              }}
              style={{
                marginHorizontal: 10,
                flexDirection: 'row',
                height: 40,
                alignItems: 'center',
              }}>
              <Icon
                name="arrow-back"
                type="Ionicons"
                style={{fontSize: 20, color: Colors.white}}
              />
              <CustomFont
                style={{color: Colors.white, marginStart: 10}}
                Text={this.props.headerTxt}
              />
            </Pressable>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

export default withNavigation(Header);
