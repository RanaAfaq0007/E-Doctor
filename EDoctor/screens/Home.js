import { Image, SafeAreaView, ScrollView, StyleSheet,  TouchableOpacity,  View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Text } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SpeclialistCard from '../components/SpeclialistCard';
import DoctorsCard from '../components/DoctorsCard';

const logo = require("../assets/edoctor.png");


const Home = (props) => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[]);
  const onPressDoctorsSeeAll = ()=>{
    navigation.navigate("alldoctors")
  }
  const onPressSpecialistsSeeAll = ()=>{
    navigation.navigate("All Specialists")
  }
  const onPressRecomendedSeeAll = ()=>{
    navigation.navigate("allrecommended")
  }
  return (
    <SafeAreaView style={{paddingTop:30,backgroundColor:"white"}}>
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
        <Ionicons name="heart-sharp" size={32} color="green"  />
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
        <SpeclialistCard genre={"Optical"} total={20}/>
        <SpeclialistCard genre={"Arthopedic"} total={12}/>
        <SpeclialistCard genre={"Cardio"} total={32}/>
        <SpeclialistCard genre={"PhsyioTherapist"} total={3} />
        </View>
        </ScrollView>

        {/* Top Doctor*/}

      {/* Top Specialists */}
      <View style = {styles.HeadTitle}>
          <Text style={styles.headSpecs} >Top Doctors</Text>
          <TouchableOpacity onPress={onPressDoctorsSeeAll}>
          <Text style={styles.headSee}>See All</Text>
          </TouchableOpacity>
        </View>
        {/* Doctors Card */}
        <ScrollView horizontal >
        <View style={styles.SpeclialistCard}>
          <DoctorsCard genre={"Cardio"} Name={"Dr Shakira"}/>
          <DoctorsCard genre={"Cardio"} Name={"Dr Shakira"}/>
          <DoctorsCard genre={"Cardio"} Name={"Dr Shakira"}/>
          <DoctorsCard genre={"Cardio"} Name={"Dr Shakira"}/>
        </View>
        </ScrollView>   
        <View style = {styles.HeadTitle}>
          <Text style={styles.headSpecs} >Recommended</Text>
          <TouchableOpacity onPress={onPressRecomendedSeeAll}>
          <Text style={styles.headSee}>See All</Text>
          </TouchableOpacity>
          
        </View>   
         {/* Doctors Card */}
         <ScrollView horizontal >
        <View style={styles.SpeclialistCard}>
          <DoctorsCard genre={"Cardio"} Name={"Dr Shakira"}/>
          <DoctorsCard genre={"Cardio"} Name={"Dr Shakira"}/>
          <DoctorsCard genre={"Cardio"} Name={"Dr Shakira"}/>
          <DoctorsCard genre={"Cardio"} Name={"Dr Shakira"}/>
        </View>
        </ScrollView>   

        
        </View>
    
    
        </ScrollView>
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


})