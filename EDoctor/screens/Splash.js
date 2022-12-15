import { Image, StyleSheet, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
const logo = require("../assets/edoctor.png");



const Splash = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[]);

  setTimeout(() => {
    navigation.navigate("Login");
  }, 3000);

  return (
    <View style={styles.container}>
     <Image
     source={logo} 
     />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
    
})