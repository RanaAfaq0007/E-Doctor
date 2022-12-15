

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AllSpecialistsCard from '../components/AllSpecialistsCard'
import { useNavigation } from '@react-navigation/native';

const AllSpecialists = (props) => {
  const navigation = useNavigation();

  const onPressCardio = () => {
    navigation.navigate("Cardio Specialists")
  }
  const onPressArtho = () =>{
    navigation.navigate("Artho Specialists")
  }
  const onPressEye = () =>{
    navigation.navigate("Eye's Specialists")
  }
  const onPressBrain = () =>{
    navigation.navigate("Brain Specialists")
  }
  const onPressMouth = () =>{
    navigation.navigate("Mouth Specialists")
  }
  const onPressNerve = () =>{
    navigation.navigate("Nerve Specialists")
  }
  const onPressDental = () =>{
    navigation.navigate("Dental Specialists")
  }
  const onPressChild = () =>{
    navigation.navigate("Child Specialists")
  }
  return (
  <View style={styles.Container}>
      <ScrollView>
        <TouchableOpacity onPress={onPressCardio}>
        <AllSpecialistsCard genre={"Cardio"} total={20}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressDental}>
        <AllSpecialistsCard genre={"Dental"} total={20}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressEye} >
        <AllSpecialistsCard genre={"Eye"} total={20}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressBrain}>
        <AllSpecialistsCard genre={"Brain"} total={20}/>
        </TouchableOpacity>

      
    </ScrollView>
    <ScrollView>
    <ScrollView>
    <TouchableOpacity onPress={onPressChild}>
        <AllSpecialistsCard genre={"Child"} total={20}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressMouth}>
        <AllSpecialistsCard genre={"Mouth"} total={20}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressNerve}>
        <AllSpecialistsCard genre={"Nerve"} total={20}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressArtho}>
        <AllSpecialistsCard genre={"Artho"} total={20}/>
        </TouchableOpacity>
    </ScrollView>
    </ScrollView>
  </View>
  )
}

export default AllSpecialists

const styles = StyleSheet.create({
  Container:{
    flex:1,
    flexDirection:"row"
  }
})