

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import AllSpecialistsCard from '../components/AllSpecialistsCard'
import { useNavigation } from '@react-navigation/native';

const AllSpecialists = (props) => {
  const navigation = useNavigation();
 
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[]);

  const onPressCardio = () => {
    navigation.navigate("Cardio Specialists")
  }

  const onPressOrtho = () =>{
    navigation.navigate("Orthopedic Specialists")
  }
  const onPressNeuro = () =>{
    navigation.navigate("Neuro Specialists")
  }
  const onPressPsychatrist = () =>{
    navigation.navigate("Psychatrist")
  }
  const onPressPulmo = () =>{
    navigation.navigate("Pulmonologist Specialists")
  }
  const onPressSkin= () =>{
    navigation.navigate("Skin Specialists")
  }
  return (
    <>
    <View style={styles.TitleView}>
      <Text style={styles.title}>All Specialists</Text>
    </View>
  <View style={styles.Container}>
    
      <ScrollView>
        <TouchableOpacity onPress={onPressCardio}>
        <AllSpecialistsCard genre={"Cardio"} imageIcons="https://cdn0.iconfinder.com/data/icons/healthcare-science-and-government/64/heartbeat-healthcare-pulse-heart-1024.png"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressOrtho} >
        <AllSpecialistsCard genre={"Ortho"} imageIcons="https://cdn0.iconfinder.com/data/icons/medical-solid-take-care-of-yourself/512/Bone_and_spine-1024.png"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressNeuro}>
        <AllSpecialistsCard genre={"Neuro"} imageIcons="https://cdn3.iconfinder.com/data/icons/medical-specialties-1-2/256/Neurology-128.png"/>
        </TouchableOpacity>

      
    </ScrollView>
    <ScrollView>
    <ScrollView>
    <TouchableOpacity onPress={onPressSkin}>
        <AllSpecialistsCard genre={"Skin"} imageIcons="https://cdn4.iconfinder.com/data/icons/plastic-surgery-outlines/200/20-1024.png"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressPsychatrist}>
        <AllSpecialistsCard genre={"Psychatrist"} imageIcons="https://cdn3.iconfinder.com/data/icons/miscellaneous-277-line/128/psychiatry_health_mental_mind_stress_medical_brain_mind_human-512.png" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressPulmo}>
        <AllSpecialistsCard genre={"Pulomonologist"} imageIcons="https://cdn2.iconfinder.com/data/icons/medical-specializations-doodle/160/006_lungs-pulmonologist-body-part-internal-organ-1024.png"/>
        </TouchableOpacity>
        
    </ScrollView>
    </ScrollView>
  </View>
  </>
  )
}

export default AllSpecialists

const styles = StyleSheet.create({
  Container:{
    flex:1,
    flexDirection:"row",
    backgroundColor:'white',
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  TitleView:{
    padding:15,
    marginTop:23,
    backgroundColor:"white"
  },
  title:{
    fontWeight:"600",
    fontSize:20
  }
})