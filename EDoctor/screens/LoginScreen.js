import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
const logo = require("../assets/edoctor.png");
import { useNavigation } from '@react-navigation/native';
import LargeButton from '../components/LargeButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { userData } from '../store/userSlice';

const LoginScreen = (props) => {
  const dispatch = useDispatch();
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:false,
        headerLeft:null,
      })
    },[]);
    
    const moveToRegister = () =>{
        navigation.navigate("register");
    }

    const submitHandler = async () =>{
        if (!email || !password){
          Alert.alert('Empty Fields !','Make sure all of the fields must be filled.');
          return;
        }
        fetch("http://192.168.100.49:5000/user/signin/",{
          method:"POST",
          headers:{
            'Content-Type' :'application/json',
          },
          body:JSON.stringify({
            "email":email,
            "password":password,
          })
        }).then(res=>res.json())
        .then(async (data)=>{
          try {
            await AsyncStorage.setItem('user',JSON.stringify(data));
            dispatch(userData(data));
            navigation.navigate("home")
            
          } catch (error) {
            Alert.alert("SomeThing Went wrong");
          }
        })
        
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
        value={email}
        onChangeText={(text)=>{setEmail(text)}}
        />
    </View>
    <View style={styles.inputView} >
      <TextInput  
        secureTextEntry
        style={styles.inputText}
        value={password}
        onChangeText={(text)=>{setPassword(text)}}
        placeholder="Password..." 
        placeholderTextColor="#003f5c"
        />
    </View>
    <TouchableOpacity>
      
    </TouchableOpacity>
      <LargeButton title="Login" onLoginHandler={submitHandler} />
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