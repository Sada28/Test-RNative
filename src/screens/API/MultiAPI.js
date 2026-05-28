import React, { useEffect, useState } from 'react';
import { View, Text, Alert,ScrollView, ActivityIndicator } from 'react-native';


export const MultiAPI = () => {
  const[loading,setLoading]=useState(false);

  const [data, setData] = useState([]);

  const getAPIData = async () => {
    // API call
    setLoading(true)
    try{
      const url = "https://jsonplaceholder.typicode.com/posts";
      let result = await fetch(url);
      result = await result.json();
      setData(result);
      setLoading(false);
    }
    catch (err){
console.log(err);
setLoading(false);
    }

   
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
      <Text style={{ fontSize: 50, textAlign:'center' }}>This is Multipal API calling Page</Text>
      {data.length !== 0  ? (
        data.map((item) =>
          <View style={{borderBottomColor:'black',borderBottomWidth:2,padding:10}}>
            <Text style={{backgroundColor:'red',color:'white',textAlign:'center', fontSize:20}}>USER ID: {item.userId}</Text>
            <Text style={{color:'red', fontSize:20}}>ID: {item.id}</Text>
            <Text>TITLE: {item.title}</Text>
            <Text>BODY: {item.body}</Text>
          </View>
        )
      ) : (
        <ActivityIndicator size='large' color='black'/>
          
      )}
    </ScrollView>
  );
};
