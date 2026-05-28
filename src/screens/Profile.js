import React, { useState } from 'react'
import { View ,Text,TextInput, Alert} from 'react-native'



export const Profile = () => {
const [data,setData]=useState([]);

  const SearchUser= async (text)=>{

  const url=`http://10.0.2.2:3000/Users?q=${text}`;
  // Alert.alert(url)
  let result= await fetch(url);

  result=await result.json();

  if(result){
    setData(result)
  }

 
  }
  return (
    <View style={{flex:1}}>
      <TextInput style={{borderColor:'skyblue', 
      borderWidth:2 ,margin:20 ,
      fontSize:20}} 
      placeholder={"Search"} onChangeText={(text)=>SearchUser(text)}
      />
      {
        data.length?
        data.map((item)=>
        <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:20}}>{item.name}</Text>
          <Text style={{fontSize:20}}>{item.age}</Text>
          <Text style={{fontSize:20}}>{item.email}</Text>
        </View>)
        :null
      }
    </View>
  )
};
