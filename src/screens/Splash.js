import { useNavigation } from '@react-navigation/native';
import React from 'react'

import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Grid from './Grid';

export const Splash = (props) => {
  const navigation = useNavigation()
  return (
    <View style={{ backgroundColor: "white" }}>

      <Image source={require('../assets/images/osimgs.jpg')}
        style={{ width: 420, height: 300, marginTop: 90 }} />
        
      <Text style={{ fontSize: 40, color: "black", textAlign: "center", marginTop: "40" }}>Welcome</Text>
      <Text style={{ fontSize: 20, color: "green", textAlign: "center", marginTop: "40" }}>Less Coding More Development</Text>


      <View style={{ height: 100, marginTop: 100, marginLeft: 70, marginRight: 70, }}>
        
        <Button title="Sign Up" color={'black'} onPress={() => props.navigation.navigate("Register")} />
      </View>
      <Text style={styles.textBox}>If You Have already an account? <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ color: 'green' }}>Login</Text>
      </TouchableOpacity></Text>



      {/* <Grid/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    // color:'#fff',
    fontSize: 20,
    marginLeft: 30
    // backgroundColor:'red'

  }
})

export default Splash;


