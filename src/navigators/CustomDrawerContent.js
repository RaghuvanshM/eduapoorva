import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Pressable,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {Icon, CustomFont} from '../controls';
import Images from '../utils/Images';
import Colors from '../utils/Colors';
import JsonData from '../controls/JsonData';

export default class CustomDrawerContent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSelectedItem: -1,
    };
  }

  componentDidMount() {}

  //   LogoutUser = () => {
  //     Alert.alert(
  //       'Are you sure you want to logout ? ',
  //       'Press Ok to logout ',
  //       [
  //         {
  //           text: 'Cancel',
  //           onPress: () => console.log('Cancel Pressed'),
  //           style: 'cancel',
  //         },
  //         {text: 'Ok', onPress: () => this.RemovePushToken()},
  //       ],
  //       {cancelable: false},
  //     );
  //   };

  clearAppData = async () => {
    this.props.clear();
    this.props.navigation.replace('Login');
  };

  itemSelected = (item, index) => {
    var newStateArray = JsonData.Drawerdata.slice();
    newStateArray[index].isSelected = !newStateArray[index].isSelected;
    this.setState({myArray: newStateArray});

    //this.props.navigation.navigate(item);
  };

  render() {
    const {data} = this.state;
    const {navigate,closeDrawer} = this.props.navigation ;

    return (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <ImageBackground style={{flex: 1}} source={Images.backgroundBg}>
         
          <ImageBackground
            style={{width: '100%', height: 150}}
            source={Images.circle}>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
             
              <View style={{margin: 10}}>
                <Pressable
                  style={styles.userMainView}>
                  <Image
                    style={styles.userImage}
                    source={Images.user}
                  />
                </Pressable>


                <CustomFont
                  style={styles.userNmeStyle}
                  text="Aryan Kumar"
                />
                <CustomFont style={{color: Colors.white}} text="12th PCM" />
              </View>

            <Pressable style ={{ width:60,height:60,marginTop:5 }} onPress ={()=>closeDrawer()}> 
              <Image
                style={styles.closeIcon}
                source={Images.cross}
              />
              </Pressable>
            </View>
         
          </ImageBackground>


          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={{marginVertical: 10}}>
              {JsonData.Drawerdata.map((item, index) => {
                return (
                  <Pressable style={{}} key={index}>
                    <View
                      style={{
                        ...styles.mainHeadingView,
                        justifyContent: 'space-between',
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Image style={styles.mainImage} source={item.mainImg} />
                        <CustomFont
                          style={styles.mainTxt}
                          text={item.mainTxt}
                        />
                      </View>

                      {item.subArr.length !== 0 && (
                        <Pressable
                          onPress={() => this.itemSelected(item, index)}>
                          <Icon
                            name="chevron-small-down"
                            type="Entypo"
                            style={styles.downIcon}
                          />
                        </Pressable>
                      )}
                    </View>

                    {item.isSelected &&
                      item.subArr.map((items, index) => {
                        console.log('value', items);
                        return (
                          <Pressable  key={index} onPress ={()=>navigate(items.navigate)}
                            style={{
                              ...styles.mainHeadingView,
                              marginStart: 40,
                              marginVertical: 10,
                            }}>
                            <Image
                              style={styles.mainImage}
                              source={items.Image}
                            />
                            <CustomFont
                              style={{...styles.mainTxt, color: 'black'}}
                              text={items.name}
                            />
                          </Pressable>
                        );
                      })}
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
     
     
     
     
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainHeadingView: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 8,
  },
  mainImage: {width: 20, height: 20, resizeMode: 'contain'},
  mainTxt: {marginStart: 10, color: Colors.orange},
  userImage:{
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 70 / 2,

  },
  userMainView:{
    elevation: 4,
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  userNmeStyle:{
    color: Colors.white,
    fontWeight: 'bold',
    marginVertical: 3,
    fontSize: 15,
  },
  closeIcon:{
    width: 25,
    height: 25,
    marginEnd: 20,
  },downIcon:{
    color: Colors.gray,
    fontSize: 22,
    marginTop: -4,
  }
});

// const mapStateToProps = state => ({
//   user: state.user,
//   token: state.token,
//   userProfile: state.userProfile,
//   playerId:state.playerId
// });
// const mapDispatchToProps = {clear, saveUserProfile};
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CustomDrawerContent);
