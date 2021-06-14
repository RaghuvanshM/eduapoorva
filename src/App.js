import React,{Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,

} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash/Splash';
// import AppStack from './navigators/AppStack';
import AuthStack from './navigators/AuthStack';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from '../src/store/'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import HomeTabNavigator from "./navigators/HomeTabNavigator";
 import {DashboardScreen} from '../src';
 import  Icon  from "./controls/IconNB";



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



function HomeTabNavigator({ state, descriptors, navigation, props }) {
  console.log("ThemeColor", props);

  return (
    <View style={styles.MainContainer}>
      {/* <ImageBackground
        style={styles.bgContainer}
        source={require("../assets/images/bottamBg.png")}
      > */}
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





export default class App extends Component {
  BottamTabView = () => {
    return (
      <Tab.Navigator
        backBehavior="none"
        tabBarOptions={{
        keyboardHidesTabBar: true,
        }}
         tabBar={(props) => <HomeTabNavigator {...props} />} 
       >
        <Tab.Screen name="Home" component={DashboardScreen} />
        <Tab.Screen name="Category" component={DashboardScreen} />
        <Tab.Screen name="center" component={DashboardScreen} />
        <Tab.Screen name="Cart" component={DashboardScreen} />
        <Tab.Screen name="Notifications" component={DashboardScreen} />
      </Tab.Navigator>
    );
  };


  render() {
    return (
      <Provider store={store}>
      <PersistGate persistor={persistor}>  
       <NavigationContainer>
        <Stack.Navigator initialRouteName="splashScreen"  
         screenOptions={{ headerShown: false }}
          headerMode="screen">
           <Stack.Screen 
           name="DashboardScreen" 
            component=  {DashboardScreen}
           // component={this.BottamTabView}
             />
        
          <Stack.Screen
            name="splashScreen"
            component={Splash}
          />
          

          {/* <Stack.Screen
            name="appStack"
            component={AppStack}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="authStack"
            component={AuthStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
   
   </PersistGate>
   </Provider>
    );
  }
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