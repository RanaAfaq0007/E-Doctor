import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from '../screens/Home';
import DoctorsCategories from '../screens/DoctorsCategories';
import Appointments from '../screens/Appointments';
import Profile from '../screens/Profile';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const BottomNavigationBar = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[]);
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="DoctosCategories" component={DoctorsCategories} />
    <Tab.Screen name='appointment' component={Appointments} />
    <Tab.Screen name='profile' component={Profile} />

  </Tab.Navigator>
  )
}

export default BottomNavigationBar

const styles = StyleSheet.create({})