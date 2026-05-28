//Simple API Calling (Single)
import { useNavigation } from '@react-navigation/native';
import React,{useEffect, useState}from 'react'
import { View,Text, Alert, TouchableOpacity } from 'react-native'



export const SingleAPI = () => {
const navigation = useNavigation()

  const [data,setData]=useState(undefined);
  const getAPIData= async()=>{
    //API call 
//  Alert.alert('Hello');
  
  const url ="https://jsonplaceholder.typicode.com/posts/1";
  let result = await fetch(url);    
  result=await result.json();
  setData(result)

}
  useEffect(()=>{
    getAPIData();
  },[])
  return (
    <View>
        <Text style={{fontSize:50, textAlign:'center'}}>This is Single Api calling Page</Text>
        {
          data ? <View style={{borderBottomColor:'black',borderBottomWidth:2,padding:10}}>
            <Text style={{backgroundColor:'red'}}>User ID{data.userId}</Text>
            <Text>{data.id}</Text>
            <Text >{data.title}</Text>
            <Text>{data.body}</Text>
            </View>:null
        }
    
    <View>
 <TouchableOpacity onPress={() => navigation.navigate("MultiAPI")}>

        <Text style={{ textAlign: 'center', marginTop: 30, fontSize:50 }}>GET MULTIPAL API CALLING DATA :-<Text style={{ color: 'green', textAlign:'center' }}>CLICK HERE</Text></Text>
      </TouchableOpacity>
    </View>
    </View>
    
)
};