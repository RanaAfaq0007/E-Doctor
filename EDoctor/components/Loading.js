import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const Loading = () => {
      const navigation = useNavigation();
      useLayoutEffect(()=>{
        navigation.setOptions({
          headerShown:false,
        })
      },[]);
    const detectLogin= async ()=>{
        const user = await AsyncStorage.getItem('user')
            if(user){
                  navigation.navigate("home")
            }else{
                navigation.navigate("Login")
            }
      }
      useEffect(()=>{
       detectLogin()
      },[])
  return (
    
         <View style={styles.loading}> 
    <ActivityIndicator size="large" color="green" />
   </View>
    
  )
}

export default Loading

const styles = StyleSheet.create({
    loading:{
        flex:1,
       justifyContent:"center",
       alignItems:"center" 
       }
})