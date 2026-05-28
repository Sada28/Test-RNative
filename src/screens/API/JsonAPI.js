import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { Text } from 'react-native-gesture-handler'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';


export const JsonAPI = () => {
    const[loading,setLoading]=useState(false);
     const [data,setData]=useState([]);
     

    const getAPIData= async()=>{
        setLoading(true)
        try{
            const url ="http://10.0.2.2:3000/Users";
            let result = await fetch(url);
            result = await result.json();
            setData(result);
            setLoading(false);


        }catch(err){
            console.log(err);
            setLoading(false);
        }
    }
    useEffect(()=>{
        getAPIData()
    },[])
  return (
    <View>
        <Text style={{fontSize:50}}>Call json server API</Text>
        {data.length?
        data.map((Item)=>
        <View>
            
            <Text>Name:{Item.name}</Text>
            <Text>Age:{Item.age}</Text>
            <Text>Id:{Item.email}</Text>
        </View>)
        :null
    }
    </View>
  )
}
export default JsonAPI;