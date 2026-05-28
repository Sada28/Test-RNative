import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { Home } from '../../screens/Home';
import { Profile } from '../../screens/Profile';
import { SingleAPI } from '../../screens/API/SingleAPI';
import { MultiAPI } from '../../screens/API/MultiAPI';
import {JsonAPI} from '../../screens/API/JsonAPI';
import {PostAPI} from '../../screens/API/PostAPI';
import {TabNavbar} from './TabNav';
import Grid from '../../screens/Grid';
import asyncdata from '../../screens/AsyncDB/Asyncdata';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator >
       
        <Drawer.Screen name='Home' component={TabNavbar}/>
        <Drawer.Screen name='Grid' component={Grid}/>

        <Drawer.Screen name='SingleAPI' component={SingleAPI}/>
        <Drawer.Screen name='MultiAPI' component={MultiAPI}/>   
        <Drawer.Screen name='JsonAPI' component={JsonAPI}/>
        <Drawer.Screen name='PostAPI' component={PostAPI}/>
        <Drawer.Screen name='Asyncdata' component={asyncdata}/>

        


    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})