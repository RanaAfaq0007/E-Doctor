import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, StyleSheet,  TouchableOpacity,  View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SpeclialistCard from '../components/SpeclialistCard';



const logo = require("../assets/edoctor.png");


const Home = (props) => {
  const[doctorsData,setDoctorsData]=useState();
  const [loading, setLoading ] = useState(true);
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[]);

  
 
  const onPressSpecialistsSeeAll = ()=>{
    navigation.navigate("All Specialists")
  }
 
  const onPressOrtho = () =>{
    navigation.navigate("Orthopedic Specialists")
  }
  const onPressPulmo = () =>{
    navigation.navigate("Pulmonologist Specialists")
  }
  const onPressCardio = () => {
    navigation.navigate("Cardio Specialists")
  }
  const onPressSkin= () =>{
    navigation.navigate("Skin Specialists")
  }
  
  const onPressHeart = () => {
    navigation.navigate("Liked");
  }

  const getDoctorsData = async () =>{
    try {
      const response = await fetch(
        "http://192.168.100.49:5000/topdoctors/getAll"
      )
      const myData = await response.json();
      setDoctorsData(myData);
      setLoading(false);
      

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getDoctorsData();
  },[])

  const doctorsCard = ({item}) =>{
  return(
    <TouchableOpacity onPress={()=>navigation.navigate("Doctors Detail",
    {
      Name:item.name,
      Image:item.imageUrl,
      college:item.college,
      specialist:item.specialist,
      address:item.address,
      description:item.description,
      workingHours:item.workingHours,
      experience:item.experience,
      patients:item.patients
    }
    
    )} >
    <View style={styles.dcontainer} >
    <Image 
    source={{uri:item.imageUrl}}
   style={styles.dlogo}
    />
   <View style={styles.dsecondContiner}>
   <Text style={styles.dtitle}>{item.name}</Text>
     <Text style={styles.dtitle}>{item.specialist}</Text>
   </View>
     
   </View>
   </TouchableOpacity>
  )
  }

  return (
    <SafeAreaView style={{paddingTop:30,backgroundColor:"white"}}>
      {
          loading ? (<View style={styles.loadingIndicator}><ActivityIndicator size="large" color={"green"}/><Text>loading...</Text></View>) : (
    <View>
  <ScrollView>
       <View style={styles.Container} >
            {/* Header Part */}
        <View style={styles.topBar}>
        <Image
        source={logo}
        style={styles.logo}
        />
        <Text style={styles.loginInfo}>EDoctor</Text>
        <View style={styles.btnGroup}>
        <Ionicons name="notifications-sharp" size={32} color="green"  />
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity onPress={onPressHeart}>
          <Ionicons name="heart-sharp" size={32} color="green"  />
          </TouchableOpacity>
       
        </View>
        </View>

        {/* body */}
     
            {/* Top Specialists */}
        <View style = {styles.HeadTitle}>
          <Text style={styles.headSpecs} >Top Specialists</Text>
          <TouchableOpacity onPress={onPressSpecialistsSeeAll}>
          <Text style={styles.headSee}>See All</Text>
          </TouchableOpacity>
        </View>
        {/* Specialists Card */}
        <ScrollView horizontal >
        <View style={styles.SpeclialistCard}>
        <TouchableOpacity onPress={onPressCardio}>
        <SpeclialistCard genre={"Cardio"} imageIcons="https://cdn0.iconfinder.com/data/icons/healthcare-science-and-government/64/heartbeat-healthcare-pulse-heart-1024.png" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressOrtho}>
        <SpeclialistCard genre={"Ortho"} imageIcons="https://cdn0.iconfinder.com/data/icons/medical-solid-take-care-of-yourself/512/Bone_and_spine-1024.png" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressSkin}>
        <SpeclialistCard genre={"Skin"} imageIcons="https://cdn4.iconfinder.com/data/icons/plastic-surgery-outlines/200/20-1024.png" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressPulmo}>
        <SpeclialistCard genre={"Pulmonologist"} imageIcons="https://cdn2.iconfinder.com/data/icons/medical-specializations-doodle/160/006_lungs-pulmonologist-body-part-internal-organ-1024.png" />
        </TouchableOpacity>
        </View>
        </ScrollView>

        {/* Top Doctor*/}

      {/* Top Specialists */}
      <View style = {styles.HeadTitle}>
          <Text style={styles.headSpecs} >Top Doctors</Text>
        </View>
        {/* Doctors Card */}
       
        <View >

        <FlatList

         horizontal
         data = {doctorsData}
         renderItem={doctorsCard}
         keyExtractor={item => item._id}
        
        />
         
        </View>
          
        <View style = {styles.HeadTitle}>
          <Text style={styles.headSpecs} >Recommended</Text>
        </View>   
         {/* Doctors Card */}
         <FlatList

         horizontal
         data = {doctorsData}
         renderItem={doctorsCard}
         keyExtractor={item => item._id}
        
        />
        
        </View>
    
    
        </ScrollView>
    </View>
  )
      }
    
    </SafeAreaView>
   
  
  )
}

export default Home

const styles = StyleSheet.create({
  Container:{
    backgroundColor: 'white',
  },
  topTitle:{
    fontWeight:"bold",
    
  },
  SpeclialistCard:{
    flexDirection:'row'
  },
  btnGroup:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:'#b5dba9',
    height:40,
    borderRadius:16,
    width:40,
  },
  loadingIndicator:{
    minHeight:"100%",
    display:"flex",
    justifyContent:'center',
    alignItems:"center"
},
  HeadTitle:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    margin:5,
    marginTop:10,
    padding:5
  },
  headSee:{
    color:"green",
    fontWeight:"bold"
  },
  headSpecs:{
    fontWeight:"bold"
  },
  logo:{
    height:60,
    width:60
  },
  topBar:{
    
    flexDirection:'row',
    justifyContent:"space-evenly",
    alignItems:'center',
    padding:5
    
    
  },
  loginInfo:{
    
    fontWeight:'800',
    fontSize:20,
    fontFamily:""
    
  },
  dcontainer:{
    alignItems: 'center',
    height:220,
    width:200,
    justifyContent: 'center',
    marginTop:10,
    marginLeft:10,
    borderRadius:20,
   
    
},
dsecondContiner:{
    backgroundColor:"gray",
    width:200,
    alignItems:'center',
    justifyContent:"center",
    height:60
},
dshadowProp: {  
    shadowOffset: {width: 2, height: 4},  
    shadowColor: 'black',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
  },  
dlogo:{
    height:150,
    width:200,
    borderTopLeftRadius:16,
    borderTopRightRadius:16

    
  },
 dtitle:{
    color:"",
 } 


})