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
  TouchableOpacity,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import {CustomFont, Icon, SearchTextInput} from '../../controls';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import JsonData from '../../controls/JsonData';
import * as Progress from 'react-native-progress';
import styles from './style';

export default class DashboardScreen extends Component {

  renderItem = ({item, index}) => (
    <View
      style={styles.renderItemMainView}>
      <ImageBackground
        
        source={item.backgroundImg}
        style={styles.renderImageBg}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <CustomFont style={{color: Colors.white}} text={item.text} />
            <Progress.Bar
              style={{marginTop: 10}}
              borderWidth={0.5}
              color={item.fillColor}
              borderColor={item.fillColor}
              unfilledColor={Colors.white}
              progress={0.4}
              width={80}
            />
          </View>

          <Image
           
            style={styles.centerImageRenderItem}
            source={item.images}
          />
        </View>
      </ImageBackground>
    </View>
  );

  renderItemPopularCources = ({item, index}) => (
    <View
      style={styles.popularCouseMainView}>
      <ImageBackground
       
        source={Images.popularCourcesBg}
        style= {styles.imageBG}>
        <View style={{padding: 5}}>
          <Image
            style={styles.logoImg}
            source={Images.books}
          />
          <View
            style={{...styles.renderSubContainer, backgroundColor: item.fillColor,}}
          />
          <CustomFont
            numberOfLines={1}
            style={styles.renderTxt}
            text="Dummy txt courses Name  tetgdg"
          />
          <CustomFont style={styles.subRenderTxt} text="200C" />

          <Pressable
            style={{...styles.buyContainer, backgroundColor: item.fillColor,}}>
            <CustomFont
              style={styles.buyTxt}
              text="Buy"
            />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );

  earningView = () => {
    return (
      <View
        style={styles.earningMainView}>
        <ImageBackground
          
          source={Images.popularCourcesBg}
          style={styles.earningImgBg}>
          <View style={{flexDirection: 'row'}}>
            <Image
             
              style={styles.networkImg}
              source={Images.network}
            />

            <View style={{margin: 5, flex: 1}}>
              <CustomFont style={{fontSize: 13}} text="Share With Friends" />
              <CustomFont
                numberOfLines={3}
                style={styles.shareTxt}
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
              />

              <Pressable
                style={styles.shareView}>
                <CustomFont
                  style={styles.sharingTxt}
                  text="Share"
                />
                <Icon
                  name="sharealt"
                  type="AntDesign"
                  style={styles.shareIcon}
                />
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  AppProcessView = () => {
    return (
      <View
        style={styles.appWorkView}>
        <ImageBackground
          
          style={styles.ApImageBg}
          source={Images.bg3}>
          <View style={styles.ApSubContaiiner}>
            <Image
              style={styles.AplistImages}
              source={Images.list}
            />

            <View style={styles.CustomeTxtView}>
              <CustomFont
                style={styles.appTxtAp}
                text="How App Works"
              />

              <View style={styles.centerTxtAp}>
                <CustomFont
                  numberOfLines={3}
                  style={styles.txtCustom}
                  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                />
                <Icon name="arrow-right-circle" type ="Feather" style ={{color:Colors.white,fontSize:23,alignSelf:'center',marginHorizontal:5}}/>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  render() {
 
    const {toggleDrawer} =  this.props.navigation ;

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={{flex: 1}}>

            <ImageBackground
              resizeMode="contain"
              style={{width: '100%'}}
              source={Images.header}>

              <View
                style={styles.MainContainer}>
                <Pressable  onPress ={()=>toggleDrawer()}>
                  <Image
                    style={styles.listImag}
                    source={Images.listmenu}
                  />
                </Pressable>

                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={{marginEnd: 20}}>
                    <Image
                      style={styles.notificationImg}
                      source={Images.notification}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.notificationImg}
                      source={Images.pin}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={styles.profileView}>
                <Image style={styles.userProfileImg} source={Images.user} />
                <CustomFont
                  style={styles.userNameTxt}
                  text="ARYAN KUMAR"
                />

                <View style={styles.badgesView}>
                  <View style={styles.rounderd}>
                    <Image style={styles.coinsStyles} source={Images.coins} />

                    <View style={{...styles.badgesView}}>
                      <CustomFont style={styles.bagesTxt} text="1" />
                    </View>
                  </View>

                  <View style={{...styles.rounderd, marginStart: 40}}>
                    <Image
                      style={{...styles.coinsStyles, width: 16, height: 16}}
                      source={Images.medal}
                    />

                    <View
                      style={{
                        ...styles.badgesView,
                      }}>
                      <CustomFont style={styles.bagesTxt} text="2" />
                    </View>
                  </View>
                </View>

                <View style={styles.badgeTxtView}>
                  <CustomFont style={styles.coinsTxt} text="POINTS" />
                  <CustomFont
                    style={{...styles.coinsTxt, marginStart: 30}}
                    text="BADGES"
                  />
                </View>

                <View style={{marginVertical: 5}}>
                  <SearchTextInput placeholder="Search doubts" />
                </View>
              </View>
            </ImageBackground>

            <View style={styles.subViewConatiner}>
              <CustomFont
                style={styles.textInfo}
                text="Your Econimics Course Subscription Package is going to end in 16 days"
              />
              <View style={styles.horizontalLine} />

              <View style={{marginHorizontal: 16}}>
                <FlatList
                  nestedScrollEnabled={false}
                  columnWrapperStyle={styles.columnWrapper}
                  showsVerticalScrollIndicator={false}
                  data={JsonData.data}
                  numColumns={2}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => index}
                />

                <CustomFont
                  style={styles.popularCousesTxt}
                  text="Popular Courses"
                />

                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={JsonData.data}
                  renderItem={this.renderItemPopularCources}
                  keyExtractor={(item, index) => index}
                />

                {/* <View
                  style={{
                    width: '100%',
                    backgroundColor: Colors.gray,
                    height: 60,
                    marginHorizontal:8,
                    marginVertical:6
                  }}/> */}

                <CustomFont
                  style={styles.earnCardView}
                  text="Earn while you learn"
                />

                {this.earningView()}
                {this.AppProcessView()}
              </View>
            </View>

            {/* <ImageBackground
            style={{height: 200, width: '100%' ,}}
            source={Images.footer}>


            </ImageBackground> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// const styles = StyleSheet.create({
 
// });
