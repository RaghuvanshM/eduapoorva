import React, {Component} from 'react';
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Pressable,
} from 'react-native';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import JsonData from '../../controls/JsonData';
import {Icon, CustomFont,Header} from '../../controls';
import styles from "./style";



export default class SelectLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: -1,
    };
  }

  
  renderItem = ({item, index}) => (
    <Pressable
      onPress={() => this.setState({isSelected: index})}
      style={styles.renderItemView}>
      <ImageBackground
        source={item.backgroundImg}
        style={styles.imageBgView}>
        <View style={styles.SubView}>
          <CustomFont
            style={styles.itemTxt}
            text={item.text}
          />
          <Image
            style={styles.containerImage}
            source={item.images}
          />
        </View>
        {index == this.state.isSelected && (
          <Image
            style={styles.selectedView}
            source={Images.checked}
          />
        )}
      </ImageBackground>
    </Pressable>
  );

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={{flex: 1}}>
            <ImageBackground
              resizeMode="contain"
              style={{width: '100%'}}
              source={Images.header}>
              <View style={{marginHorizontal: 16, marginVertical: 10, flex: 1}}>
               
                 <Header header2 header2Txt = "CHOOSE LANGUAGE"/>

                <FlatList
                  style={{marginTop: 20 ,flex:1}}
                  nestedScrollEnabled={false}
                  columnWrapperStyle={{justifyContent:'space-between'}}
                  showsVerticalScrollIndicator={false}
                  data={JsonData.SelectLanguage}
                  numColumns={2}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => index}
                />
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}



