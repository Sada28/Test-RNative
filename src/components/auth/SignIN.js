import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity ,Image} from 'react-native'

export const Login = (props) => {
  const navigation = useNavigation()
  return (
    <View>

      <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 70, marginBottom: 30 }}>Sign in  your account  </Text>

      {/* <Text style={{fontSize:20, marginLeft:30, marginBottom:20}}>Email</Text> */}
      <TextInput style={styles.textInput} placeholder='example1@gmail.com' />
      <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} />

      <Text style={{ marginTop: 30, marginLeft: 230 }}>Forgot Your Password?</Text>
      <View style={{ marginLeft: 50, marginRight: 50, marginTop: 50 }}>

        <Button title='Sign IN' color={'green'} onPress={() => props.navigation.navigate("DrawerNav")} ></Button>

      </View>
      <Text style={{ textAlign: 'center', marginTop: 30 }}>or sign in with</Text>
      <View>

      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>

        <Text style={{ textAlign: 'center', marginTop: 30 }}>Dont Have an account?<Text style={{ color: 'green' }}>Sign Up</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'red',
    borderWidth: 2,
    borderColor: 'skyblue',
    marginTop: 30,
    marginRight: 30,
    marginLeft: 30,

  }
})
export default Login;