import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LargeButton = ({title ,onLoginHandler}) => {
  return (
    <TouchableOpacity style={styles.loginBtn} onPress={onLoginHandler}>
    <Text style={styles.loginText}>{title}</Text>
  </TouchableOpacity>
  )
}

export default LargeButton

const styles = StyleSheet.create({
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
      loginText:{
        color:"white"
      }
})