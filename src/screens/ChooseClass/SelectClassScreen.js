import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Pressable,
} from 'react-native';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import JsonData from '../../controls/JsonData';
import {Icon, CustomFont, Header} from '../../controls';
import styles from './style';

export default class SelectClassScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: -1,
    };
  }

  renderItem = ({item, index}) => (
    <Pressable
      onPress={() => this.setState({isSelected: index})}
      style={styles.renderItemMain}>
      <ImageBackground
        resizeMode="stretch"
        source={item.backgroundImg}
        style={styles.subContainer}>
        <View style={styles.CeneterView}>
          <CustomFont style={styles.customeTxt} text={item.text} />
          <Image style={styles.imageCentered} source={Images.lecture} />
        </View>

        {index == this.state.isSelected && (
          <Image style={styles.selectedImage} source={Images.checked} />
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
              <View style={{...styles.MainContainer}}>
                <Header header2 header2Txt="CHOOSE CLASS" />

                <FlatList
                  style={{marginTop: 20}}
                  nestedScrollEnabled={false}
                  columnWrapperStyle={styles.columnWrap}
                  showsVerticalScrollIndicator={false}
                  data={JsonData.ChooseClasses}
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
