import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash/Splash';
import AuthStack from './navigators/AuthStack';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from '../src/store/';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Images from './utils/Images';
import {
  DashboardScreen,
  MyProfileScreen,
  SelectClassScreen,
  SelectLanguage,
  EditProfile,
  EduWallet,
  BuyCourseScreen,
  MyCourseScreen
} from '../src';
import CustomDrawerContent from './navigators/CustomDrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeTabNavigator({state, descriptors, navigation, props}) {
  console.log('ThemeColor', props);

  return (
    <View style={styles.MainContainer}>
      <View style={styles.mapView}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBrLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          const setColor = isFocused ? '#ff5a2d' : 'white';

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          let data =
            label == 'HOME'
              ? '#ff5a2d'
              : label == 'PROGRESS'
              ? '#7e4ba9'
              : label == 'DOUBTS'
              ? '#fa7f02'
              : label == 'MY GOALS'
              ? '#20a994'
              : label == 'FEED WALL'
              ? '#4873d1'
              : 'black';

          return (
            <TouchableOpacity
              activeOpacity={0.9}
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1, alignItems: 'center'}}>
              {label == 'HOME' ? (
                <Image style={styles.iconsStyle} source={Images.home} />
              ) : label == 'PROGRESS' ? (
                <Image style={styles.iconsStyle} source={Images.progress} />
              ) : label == 'DOUBTS' ? (
                <Image
                  style={{height: 45, width: 46, marginTop: -30}}
                  source={Images.doubts}
                />
              ) : label == 'MY GOALS' ? (
                <Image style={styles.iconsStyle} source={Images.goals} />
              ) : (
                label == 'FEED WALL' && (
                  <Image style={styles.iconsStyle} source={Images.feedWall} />
                )
              )}

              <Text
                style={{
                  marginBottom: 3,
                  fontSize: 9,
                  fontFamily: 'ABeeZee-Regular',
                  fontWeight: 'bold',
                  marginTop: 4,
                  color: data,
                }}>
                {label}
              </Text>
              <View
                style={{
                  width: 40,
                  height: 3,
                  backgroundColor: setColor,
                  marginHorizontal: 5,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default class App extends Component {
  
  MainDrawer = () => {
    return ( 
      <Drawer.Navigator 
        initialRouteName="DashboardScreen"
        drawerContentOptions={{
          activeBackgroundColor: '#ebf3fd',
          inactiveTintColor: 'black',
          activeTintColor: 'black',
        }}
        drawerStyle={{
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="DashboardScreen" component={this.BottamTabView} />
        <Drawer.Screen name="Profile" component={MyProfileScreen} />
        <Stack.Screen name="EduWallet" component={EduWallet} /> 
        <Stack.Screen name="BuyCourseScreen" component={BuyCourseScreen} />  
        <Stack.Screen name="MyCourseScreen" component={MyCourseScreen} />
      </Drawer.Navigator>
    );
  };

  BottamTabView = () => {
    return (
      <Tab.Navigator
        backBehavior="none"
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}
        tabBar={props => <HomeTabNavigator {...props} />}>
        <Tab.Screen name="HOME" component={DashboardScreen} />
        <Tab.Screen name="PROGRESS" component={DashboardScreen} />
        <Tab.Screen name="DOUBTS" component={DashboardScreen} />
        <Tab.Screen name="MY GOALS" component={DashboardScreen} />
        <Tab.Screen name="FEED WALL" component={DashboardScreen} />
      </Tab.Navigator>
    );
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="DashboardScreen"
              screenOptions={{headerShown: false}}
              headerMode="screen">
              
              <Stack.Screen
                name="DashboardScreen"
                component={this.MainDrawer}
              />

              <Stack.Screen name="splashScreen" component={Splash} />
              <Stack.Screen
                name="Profile"
                component={MyProfileScreen}
              />
              <Stack.Screen
                name="SelectClassScreen"
                component={SelectClassScreen}
              />
              <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
              <Stack.Screen name="authStack" component={AuthStack} />
              <Stack.Screen name="EditProfile" component={EditProfile} />

            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    elevation: 4,
  },
  bgContainer: {
    flex: 1,
    //backgroundColor:ThemeColor.backgroundColor
  },
  mapView: {
    flexDirection: 'row',
    height: 52,
    alignItems: 'center',
    // paddingTop: 6,
    // marginTop:3,
    // paddingBottom:5
    // marginBottom:5
  },
  iconsStyle: {width: 20, height: 20},
});
