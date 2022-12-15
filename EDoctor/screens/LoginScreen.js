import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
const logo = require("../assets/edoctor.png");

import { useNavigation } from '@react-navigation/native';
import LargeButton from '../components/LargeButton';

const LoginScreen = (props) => {
    const navigation = useNavigation();
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:false,
      })
    },[]);
    
    const moveToRegister = () =>{
        navigation.navigate("register");
    }

    const moveToHome = () =>{
        navigation.navigate("home")
    } 
  return (
    <View style={styles.container}>
    <Image 
     source={logo}
     style={styles.logo}
    />
    <Text style={styles.loginInfo}>Please Login..</Text>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Email..." 
        placeholderTextColor="#003f5c"
        />
    </View>
    <View style={styles.inputView} >
      <TextInput  
        secureTextEntry
        style={styles.inputText}
        placeholder="Password..." 
        placeholderTextColor="#003f5c"
        />
    </View>
    <TouchableOpacity>
      
    </TouchableOpacity>
      <LargeButton title="Login" onLoginHandler={moveToHome}/>
    <TouchableOpacity onPress={moveToRegister}>
      <Text style={styles.signupText}>Signup</Text>
    </TouchableOpacity>
  </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      loginInfo:{
        paddingTop:15,
        paddingBottom:15,
        fontWeight:'500',
        fontSize:20
        
      },
      logo:{
        paddingBottom:20
      },
      inputView:{
        width:"80%",
        backgroundColor:"lightgray",
        borderRadius:25,
        height:50,
        marginTop:10,
        marginBottom:12,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"black"
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"green",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      signupText:{
        color:"green",
        marginTop:20,
      },
      loginText:{
        color:"white"
      }
})