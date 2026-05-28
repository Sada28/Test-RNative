import React, { useState } from "react";
import { View,Text, Alert,Button } from  'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const asyncdata=()=>{

    const [User,setUser]=useState('');

    const setData =async()=>{
        await AsyncStorage.setItem("User","Sadanand Madame")
    }
    const getData =async()=>{
    const User= await AsyncStorage.getItem("User");
    setUser(User);
    }
    const removeData=async()=>{
    await AsyncStorage.removeItem("User")
    setUser('')
    }
    return(
        <View>
            <Text style={{fontSize:30}}>Async Storage Data With React Native with ==|== {User}</Text>
            <Button title="Set Data" onPress={setData}/>
            <Button title="Get Data" onPress={getData}/>
            <Button title="Remove Data" onPress={removeData}/>
        </View>

    )
}
export default asyncdata;