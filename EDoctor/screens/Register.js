import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect,  useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import LargeButton from '../components/LargeButton';
import { Avatar } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import {BottomSheet} from "react-native-btr";





const logo = require("../assets/edoctor.png");


const Register = (props) => {

 

  const [visible, setVisible] = useState(false);

  function toggle() {
    setVisible((visible) => !visible);
  }
  const navigation = useNavigation();
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:false,
      })
    },[]);
    const moveToLoginPage =() =>{
      navigation.navigate("Login");
    }
  return (
    <ScrollView>
    <View style={styles.container}>
    

    
    <View style={styles.upload}>
    <Avatar.Image size={150} source={logo}/>

      <TouchableOpacity onPress={toggle}>
      <Ionicons name="cloud-upload-sharp" size={32} color="green" style={styles.uploadIcon} />
      
      </TouchableOpacity>
      
    </View>
   
      
    
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Name.." 
        placeholderTextColor="#003f5c"
        />
       
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Email..." 
        placeholderTextColor="#003f5c"
        />
       
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Phone Number..."
        keyboardType='number-pad' 
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
    
      <LargeButton title="Register" onLoginHandler={moveToLoginPage}/>
 <View style={styles.already}>
  <Text>Already have an account ? </Text>
 <TouchableOpacity onPress={moveToLoginPage} >
      <Text style={styles.signupText}>Sign In</Text>
    </TouchableOpacity>
 </View>

 <BottomSheet
        visible={visible}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
      >
        <View style={styles.card}>
         
            <View  >
             
              <TouchableOpacity style={styles.takeFromCamera}>
              <Text style={styles.imageUploadText}>Open Camera</Text>
              <Ionicons name="camera-sharp" size={32} color="green"  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.takeFromCamera}>
              <Text style={styles.imageUploadText}>Take from Gallery</Text>
              <Ionicons name="images-sharp" size={32} color="green"  />
              </TouchableOpacity>
            </View>
          
        </View>
      </BottomSheet>
  </View>
  </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height:800
      },
      takeFromCamera:{
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          margin:5,
          padding:5,
          borderRadius:16,
          borderWidth:1,
        

      },
      imageUploadText:{
        fontSize:16,
        padding:3,
        marginRight:5,
        fontWeight:'700'
      
      },
      already:{
           
           flexDirection:'row',
           alignItems:"center",
           justifyContent:"center"
      },
      card: {
        backgroundColor: "#fff",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:25
      },
      upload:{
      flexDirection:'row',
      justifyContent:"space-evenly",
      alignItems:'center',
      
      
      },
      uploadIcon:{
           paddingTop:100,
            paddingLeft:10
      },
      logo:{
        paddingBottom:20
      },
      inputView:{
        width:"80%",
        backgroundColor:"lightgray",
        borderRadius:25,
        height:50,
        marginTop:5,
        marginBottom:20,
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
        fontWeight:'bold',
        fontSize:16,
        textShadowColor:"green",
       
      },
      loginText:{
        color:"white"
      }
})
  
