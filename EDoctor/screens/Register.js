import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect,  useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import LargeButton from '../components/LargeButton';
import { Avatar } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import {BottomSheet} from "react-native-btr";
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const Register = (props) => {

  const [image,setImage]=useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const [loading,setLoading] = useState(false);
  const [visible, setVisible] = useState(false);  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState('');
  const [password,setPassword] = useState('');

  const pickImage = async () => {
    let data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing:true
    });
    if (!data.canceled) {
      let newFile = {
        uri:data.assets[0].uri,
        type:"test/jpg" ,
        name:'test/profile image'
      };
     handleUploadImage(newFile);
    }
  };

  const pickImageFromCamera = async () => {
    let data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing:true
    });
    if (!data.canceled) {
      let newFile = {
        uri:data.assets[0].uri,
        type:"test/jpg" ,
        name:'test/profile image'
      };
     handleUploadImage(newFile);
    }

  //    let newFile = {
  //      uri:data.assets[0].uri , 
  //      type:`test/${data.assets[0].uri.split(".")[0]}`,
  //      name:`test.${data.assets[0].uri.split(".")[0]}`}
    
  //   // handleUploadImage(newFile);
  // };
};

  
  const handleUploadImage = (image) =>{
      const data = new FormData()
      data.append('file',image);
      data.append('upload_preset','edoctorapp')
      fetch("https://api.cloudinary.com/v1_1/casual/image/upload",{
        method:"POST",
        body:data
      }).then(res =>res.json()).then(data=>{
        console.log("backend response",data)
        setImage(data.url);
      })

  }

  function toggle() {
    setVisible((visible) => !visible);
  }

  const navigation = useNavigation();
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:false,
      })
    },[]);
    const onRegisterHandler = async () => {
      console.log(email,password,name,number);
      fetch("http://192.168.100.49:5000/user/signup",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "name":name,
          "email":email,
          "phoneNumber":number,
          "password":password

        })
      }).then(res=>res.json())
      .then(
        navigation.navigate('Login')
      )
      // // setLoading(true);
      // // if (!name || !email || !password || !number) {
      // //   Alert.alert('Please Fill all The Fields');
      // //   setLoading(false);
      // //   return;
      // // }
      
      // // if (password<=7) {
        
      // //   Alert.alert('Password must be of 8 Characters');
      // //   setLoading(false);
      // //   return;
      // // }
      // console.log( email,name,password,image )
      // try {
      //   const config = {
      //     headers: {
      //       "Content-type": "application/json",
      //     },
      //   };
      //   const { data } = await axios.post(
      //     "http://10.0.2.2:5000/user",
      //     {
      //       name,
      //       email,
      //       password,
      //       image,
      //     },
      //     config
      //   );
      //   console.log(data);
       
        
      //   setLoading(false);
      //   navigation.navigate("Login");
      // } catch (error) {
      //  Alert.alert("Something went wrong!!",error);
      //   setLoading(false);
      // }
    };
    const moveToLoginPage = () =>{
      navigation.navigate("Login");
  }
    
   
  return (
    <ScrollView>
    <View style={styles.container}>
    
    <View style={styles.upload}>
    <Avatar.Image size={150} 
    source={{uri:image}}
     />

      <TouchableOpacity onPress={toggle}>
      <Ionicons name="cloud-upload-sharp" size={32} color="green" style={styles.uploadIcon} />
      </TouchableOpacity>
    </View>
   
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Name.." 
        placeholderTextColor="#003f5c"
         value={name}
         onChangeText={(e) => setName(e)}
        />
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Email..." 
        placeholderTextColor="#003f5c"
        onChangeText={(e) => setEmail(e)}
        />
       
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Phone Number..."
        keyboardType='number-pad' 
        placeholderTextColor="#003f5c"
        onChangeText={(e) => setNumber(e)}
        />
       
    </View>

    <View style={styles.inputView} >
      <TextInput  
        secureTextEntry
        style={styles.inputText}
        placeholder="Password..." 
        placeholderTextColor="#003f5c"
        onChangeText={(e) => setPassword(e)}
        />
    </View>
    
      <LargeButton title="Register" onLoginHandler={onRegisterHandler}/>
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
         
            <View>
             
              <TouchableOpacity onPress={pickImageFromCamera} style={styles.takeFromCamera}>
              <Text style={styles.imageUploadText}>Open Camera</Text>
              <Ionicons name="camera-sharp" size={32} color="green"  />
              </TouchableOpacity>
              <TouchableOpacity onPress={pickImage} style={styles.takeFromCamera}>
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

