import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'



export const PostAPI = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');


    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeEror] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const saveData = async () => {
        //  Alert.alert(name);

        if (!name) {
            setNameError(true)
        }else{
            setNameError(false)
        }

        if(!age){
            setAgeEror(true)
        }else{
            setAgeEror(false)
        }

        if(!email){
            setEmailError(true)
        }else{
            setEmailError(false)
        }

        if (!name || !age || !email) {
            return false
        }
        
        const url = "http://10.0.2.2:3000/Users";
        let result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, age, email })
        })
        result = await result.json();
        if (result) {
            Alert.alert("Data Sucessfully Added");

            setName('');
            setAge('');
            setEmail('');
        }


    }
    return (
        <View>
            <Text>Post API with Input fields and form data</Text>
            <TextInput style={styles.input} value={name}
            onChangeText={(text) => setName(text)} 
            placeholder='Enter Name' />
            {nameError ? <Text style={styles.errorText}>Please enter Valid Name</Text>:null}

            <TextInput style={styles.input} value={age}
            onChangeText={(text) => setAge(text)}
            // keyboardType='numeric'
            placeholder='Enter Age' />
            {nameError ? <Text style={styles.errorText}>Please enter Valid Age </Text>:null}

            <TextInput style={styles.input} value={email}
            onChangeText={(text) => setEmail(text)} 
            placeholder='Enter Email' />
            {nameError ? <Text style={styles.errorText}>Please enter Valid Email</Text>:null}

            <Button title='Save Data' onPress={saveData} />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        borderColor: "skyblue",
        borderWidth: 1,
        margin: 20,
        fontSize: 20,
        marginBottom:5

    },
    errorText:{
        color:'red',
        marginLeft:20

    }
})

export default PostAPI;