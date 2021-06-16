
import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,

} from "react-native";

import { Icon } from "../controls/IconNB";
//import { connect } from "react-redux";

const BannerWidth = Dimensions.get("window").width;

 function HomeTabNavigator({ state, descriptors, navigation, props }) {
  console.log("ThemeColor", props);

  return (
    <View style={styles.MainContainer}>
        <View style={styles.mapView}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBrLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;
            const setColor = isFocused ? "#2AA8F2" : "#8F9CA9";

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityStates={isFocused ? ["selected"] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1, alignItems: "center" }}
              >
                {label == "Home" ? (
                  <Icon
                    type={"Feather"}
                    name={"home"}
                    style={{
                      fontSize: 20,
                      color: setColor,
                    }}
                  />
                ) : label == "Cart" ? (
                  <Icon
                    type={"Ionicons"}
                    name={"md-cart-outline"}
                    style={{
                      fontSize: 22,
                      color: setColor,
                    }}
                  />
                ) : label == "Notifications" ? (
                  <Icon
                    type={"Ionicons"}
                    name={"ios-notifications-outline"}
                    style={{
                      fontSize: 22,
                      color: setColor,
                    }}
                  />
                ) : label == "center" ? (
                  <Icon
                      type={"FontAwesome5"}
                      name={"list"}
                      style={{
                        fontSize: 20,
                        color: setColor,
                      }}
                    />
                ) : (
                  label == "Category" && (
                    <Icon
                      type={"FontAwesome5"}
                      name={"list"}
                      style={{
                        fontSize: 20,
                        color: setColor,
                      }}
                    />
                  )
                )}

                {label !== "center" && (
                  <Text
                    style={{
                      color: setColor,
                      fontSize: 12,
                      fontWeight: isFocused ? "bold" : "600",
                      marginTop: 5,
                    }}
                   label
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
    
    
    
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    position: "absolute",
    bottom: 0,
    borderTopStartRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#111826",
    flex:1,
    width:'100%'
    
  },
  bgContainer: {
    flex:1,
    //backgroundColor:ThemeColor.backgroundColor
  },
  mapView: {
    flexDirection: "row",
    height: 52,
     alignItems: "center",
    // paddingTop: 6,
    // marginTop:3,
    // paddingBottom:5
    // marginBottom:5
  },
});

// const mapStateToProps = (state) => ({ ThemeColor: state.ThemeColor });
  export default HomeTabNavigator;




















// import React, {Component} from 'react';
// import {View, Text, Image} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Home from '../screens/Home/Home';
// import Chat from '../screens/Chat/Chat';
// import Profile from '../screens/Profile/Profile';
// import Images from '../utils/Images';
// import Colors from '../utils/Colors';

// const Tab = createBottomTabNavigator();

// function HomeTabNavigator() {
//   return (
//     <Tab.Navigator
//       initialRouteName="homeScreen"
//       tabBarOptions={{
//         activeTintColor: 'rgba(255,255,255,0.5)',
//         inactiveTintColor: Colors.themeColor2,
//         inactiveBackgroundColor: Colors.themeColor1,
//         activeBackgroundColor: Colors.themeColor1,
//         style: {height: 70},
//         labelStyle: {
//           textAlign: 'center',
//         },
//         // tabStyle:{width: 20},
//         showIcon: true,
//         showLabel: true,
//         safeAreaInsets: {
//           bottom: 0,
//         },
//       }}>
//       <Tab.Screen
//         name="homeScreen"
//         component={Home}
//         options={{
//           tabBarLabel: ({color, size}) => (
//             <Text
//               style={{
//                 height: 25,
//                 marginTop: -10,
//                 textAlign: 'center',
//                 fontSize: 12,
//                 color: color,
//                 fontFamily: Colors.font
//               }}>
//               Home
//             </Text>
//           ),
//           tabBarIcon: ({color, size}) => (
//             <View style={{alignItems: 'center', justifyContent: 'center'}}>
//               <Image
//                 style={{
//                   width: 20,
//                   height: 20,
//                 }}
//                 source={Images.home}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="chatScreen"
//         component={Chat}
//         options={{
//           tabBarLabel: ({color, size}) => (
//             <Text
//               style={{
//                 height: 25,
//                 marginTop: -10,
//                 textAlign: 'center',
//                 fontSize: 12,
//                 color: color,
//                 fontFamily: Colors.font
//               }}>
//               Chat
//             </Text>
//           ),
//           tabBarIcon: ({color, size}) => (
//             <View style={{alignItems: 'center', justifyContent: 'center'}}>
//               <Image
//                 style={{
//                   width: 20,
//                   height: 20,
//                 }}
//                 source={Images.chat}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="profileScreen"
//         component={Profile}
//         options={{
//           tabBarLabel: ({color, size}) => (
//             <Text
//               style={{
//                 height: 25,
//                 marginTop: -10,
//                 textAlign: 'center',
//                 fontSize: 12,
//                 color: color,
//                 fontFamily: Colors.font
//               }}>
//               Profile
//             </Text>
//           ),
//           tabBarIcon: ({color, size}) => (
//             <View style={{alignItems: 'center', justifyContent: 'center'}}>
//               <Image
//                 style={{
//                   width: 20,
//                   height: 20,
//                 }}
//                 source={Images.profile}
//               />
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default HomeTabNavigator;







