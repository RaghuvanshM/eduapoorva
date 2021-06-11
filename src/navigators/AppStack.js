import React,{ Component } from 'react';
import DrawerContent from '../screens/DrawerContent/DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppStack(){
    return (
        <Drawer.Navigator 
        drawerContent={props => <DrawerContent {...props} />} 
        drawerStyle={{width:'80%'}} headerMode="none">
            <Drawer.Screen name="DrawerStack" component={tempStack} options={{gestureEnabled:true,title:'',headerShown:false}}/>
        </Drawer.Navigator>
    );
}

function tempStack() {
    return (
        <Stack.Navigator  initialRouteName="homeTabNavigator" headerMode="screen">
            {/* <Stack.Screen name="homeTabNavigator" component={HomeTabNavigator} options={{title:'',headerShown:false}} />       */}
        </Stack.Navigator>
    )
}

export default AppStack;
