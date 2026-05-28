
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../screens/Splash";
import Register from "../auth/SIgnUP";

import TabNavbar from "./TabNav";
import Login from "../auth/SignIN";
import { MultiAPI } from "../../screens/API/MultiAPI";
import { SingleAPI } from "../../screens/API/SingleAPI";
import DrawerNav from "./DrawerNav";
import { Home } from "../../screens/Home";
import { Profile } from "../../screens/Profile";
import JsonAPI from "../../screens/API/JsonAPI";
import PostAPI from "../../screens/API/PostAPI";


const Stack = createNativeStackNavigator();

const StackNav = () => {

    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{
            headerShown: false }} >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="DrawerNav" component={DrawerNav} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Profile' component={Profile} />
            


        </Stack.Navigator>

    )
}
export default StackNav;

