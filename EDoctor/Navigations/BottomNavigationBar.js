import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from '../screens/Home';
import DoctorsCategories from '../screens/DoctorsCategories';
import Appointments from '../screens/Appointments';
import Profile from '../screens/Profile';
import { useNavigation } from '@react-navigation/native';
import AllSpecialists from '../screens/AllSpecialists';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomNavigationBar = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[]);
  return (
    <Tab.Navigator >
    <Tab.Screen name="Home" component={Home} options = {{
      tabBarIcon:() => (<Ionicons name='home' size={20}/>)
    }} />
    <Tab.Screen name="DoctosCategories" component={AllSpecialists} 
    options = {{
      tabBarIcon:() => (<Ionicons name='apps' size={20} />)
    }}
    />
    <Tab.Screen name='appointment' component={Appointments}  options = {{
      tabBarIcon:() => (<Ionicons name='paper-plane' size={20}/>)
    }} />
    <Tab.Screen name='Profile' component={Profile}  options = {{
      tabBarIcon:() => (<Ionicons name='person' size={20}/>)
    }} />

  </Tab.Navigator>
  )
}

export default BottomNavigationBar

const styles = StyleSheet.create({})