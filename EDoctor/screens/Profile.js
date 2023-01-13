import {  StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Avatar, Divider } from 'react-native-paper';
const logo = require("../assets/edoctor.png")
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

const Profile = () => {
    const navigation = useNavigation();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setNumber] = useState('');
    // const items = useSelector((state)=>state.user);

  const onLogoutHandler =  ()=>{
     AsyncStorage.removeItem('user').then(()=>{
      navigation.navigate('Login')
    })
  }
  const getUserData = async()=>{
   try {
    const savedUser = await AsyncStorage.getItem('user');
    const currentUser = JSON.parse(savedUser);
    setEmail(currentUser.email);
    setName(currentUser.name);
    setNumber(currentUser.phoneNumber);
    console.log(currentUser._id);
   } catch (error) {
    console.log(error);
   }
  }

  useEffect(()=>{
     getUserData();
  },[])


  return (
<View style={styles.container} >
 
      <View >
      <View style={styles.smith}>  

      <Avatar.Image size={100} source={logo} />
<Text style={styles.adamlogo}>{name}</Text>
<Text style={styles.gmail}>{email}</Text>
<Text style={styles.country}>{phoneNumber}</Text>

</View>

<Divider style={styles.Divider1}></Divider>
 
 <View style={styles.b2}>
    <Ionicons style={styles.icon2}
                  name='notifications-circle-outline'
                  color={'green'}
                  size={40}
              />
             <Text style={styles.titles1}>Notification</Text>
    
      </View>
    
    <Divider style={styles.Divider1}></Divider>
    
    <View style={styles.b3}>
              <Ionicons style={styles.icon3}
                  name="lock-closed-outline"
                  color={'green'}
                  size={35}
              />
             <Text style={styles.titles2}>Security</Text>
 
      </View>
 
 <Divider style={styles.Divider1}></Divider>
 
 <View style={styles.b4}>
        
              <Ionicons style={styles.icon4}
                  name="information-outline"
                  color={'green'}
                  size={35}
              />
             <Text style={styles.titles3}>Help</Text>
     
      </View>
     
     <Divider style={styles.Divider1}></Divider>
     
     <View style={styles.b5}>
      <TouchableOpacity onPress={onLogoutHandler}>
      <View style={styles.logout}>
      <Ionicons style={styles.icon5}
                  name="log-in-outline"
                  color={'green'}
                  size={35}
              />
             <Text style={styles.titles4}>Logout</Text>
      </View>
      </TouchableOpacity>

      </View>
      </View>
    
  
     
          {/* profile part */}
         
         
         
                  </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
  iconsContainer:{
    padding:10,
    backgroundColor:'#b5dba9',
    borderRadius:15,
  },
icon2:{
paddingStart:15,
  paddingLeft:10,
  paddingVertical:20,
},
adamlogo:{
  paddingfstart:10,
  paddingLeft:10,
  fontWeight:'bold'

},
gmail:{
},
country:{
},
icon3:{
  paddingStart:10,
  paddingLeft:10,
  paddingVertical:20,
},
icon4:{
  paddingStart:10,
  paddingLeft:10,
  paddingVertical:20
},
icon5:{
  marginVertical:10,
paddingStart:10,
paddingLeft:10,
paddingVertical:10,
},
smith:{
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
},
  b1:{
    flexDirection:'row',
    alignItems:'center',
  },
  b2:{
    flexDirection:'row',
    alignItems:'center'
  },
  b3:{
    flexDirection:"row",
    alignItems:'center'
  },
  b4:{
    flexDirection:'row',
    alignItems:'center'
  },
  b5:{
    flexDirection:'row',
    alignItems:'center',
  },
  titles:{
    paddingLeft:10,
fontSize:25,
fontWeight:"bold"
  },
  titles1:{
    paddingLeft:30,
    fontSize:20,
    fontWeight:'bold'
  },
  titles2:{
    paddingHorizontal:35,
    fontSize:20,
    fontWeight:'bold'
  },
  titles3:{
    paddingHorizontal:40,
    fontSize:20,
    fontWeight:'bold'
  },
  titles4:{
    paddingHorizontal:40,
    fontSize:20,
    fontWeight:'bold',
  },
  rizwan:{
    backgroundColor:"white",
    marginBottom:10,
    padding:15
  },
 
  view2:{
    
    flexDirection:'row',
    backgroundColor:'red',
    padding:20,
    margin:10,

  },
  container1:{
margin:20,
paddingTop:40,
flexDirection:'row',
justifyContent:'space-between',
alignItems:"center"
  },
  Imagelogo:{
    height:50,
    width:50,
  },
  Divider1:{
    marginVertical:20,
    height:1,
    backgroundColor:'#b5dba9',
  },
  logout:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center'
  }
})