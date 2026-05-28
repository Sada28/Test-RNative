import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TextInput, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native'

export const Register = () => {

  const navigation = useNavigation()

  return (

    <ScrollView>
      <Text style={{ fontSize: 50, textAlign: 'center', marginTop: 70, marginBottom: 30 }}>Create your account </Text>
      <TextInput style={styles.textInput} placeholder='ex:john smit' />
      <TextInput style={styles.textInput} placeholder='example1@gmail.com' />
      <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} />
      <TextInput style={styles.textInput} placeholder='Confirm Password' secureTextEntry={true} />

      <View style={{ marginLeft: 100, marginRight: 100, marginTop: 50 }}>
        <Button title='Sign Up' color={'green'} ></Button>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>

        <Text style={{ textAlign: 'center', marginTop: 30 }}> Have an account?<Text style={{ color: 'green' }}>Sign In</Text></Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

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
export default Register;
