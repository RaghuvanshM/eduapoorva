import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Pressable,
} from 'react-native';
import {CustomFont, Icon, Header} from '../../controls';
import styles from '../Dashboard/style';
import Images from '../../utils/Images';
import JsonData from '../../controls/JsonData';

export default class BuyCourseScreen extends Component {

  
  renderItem = ({item, index}) => (
    <View style={{...styles.popularCouseMainView, flex: 1}}>
      <ImageBackground source={Images.popularCourcesBg} style={styles.imageBG}>
        <View style={{padding: 5}}>
          <Image style={styles.logoImg} source={Images.books} />
          <View
            style={{
              ...styles.renderSubContainer,
              backgroundColor: item.fillColor,
            }}
          />
          <CustomFont
            numberOfLines={1}
            style={styles.renderTxt}
            text="Dummy txt courses Name  tetgdg"
          />
          <CustomFont style={styles.subRenderTxt} text="200C" />

          <Pressable
            style={{...styles.buyContainer, backgroundColor: item.fillColor ,left:50,width:60,height:20}}>
            <CustomFont style={styles.buyTxt} text="Buy" />
          </Pressable>

        </View>
      </ImageBackground>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header headerTxt="BUY A COURSE" />

        <View style={{marginHorizontal: 16 ,flex:1}}>
          <CustomFont style={styles.popularCousesTxt} text="BUY A COURSE" />

          <FlatList
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            showsVerticalScrollIndicator={false}
            data={JsonData.buyCourses}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
          />
        </View>
      </SafeAreaView>
    );
  }
}
