import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../screens/Home';
import { Profile } from '../../screens/Profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import User from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator()

export const TabNavbar = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveBackgroundColor: 'black',
      tabBarInactiveTintColor: 'grey'
    }} >
      <Tab.Screen name="Home" component={Home} options={{ headerShown:false,
        tabBarIcon:({color,size})=>(
          <FontAwesome name="home" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{headerShown:false,
        tabBarIcon:({color , size})=>(
          <User name="user" size={size} color={color}/>
        )
      }} />  
    </Tab.Navigator>

  )
};
