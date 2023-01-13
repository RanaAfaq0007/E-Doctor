import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const logo = require("../assets/edoctor.png");



const SpeclialistCard = ({genre,imageIcons}) => {
    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
        return `#${randomColor}`;
      };
        
  return (
    <View style={[styles.container,styles.shadowProp, {backgroundColor:generateColor()}]}>
     <Image   source={{
      uri:imageIcons
     }} 
     style={styles.logo}
     />
      <Text style={styles.title}>{genre}</Text>
      <Text style={styles.title}>Speclialist</Text>
    </View>
  )
}

export default SpeclialistCard

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        height:170,
        width:130,
        justifyContent: 'center',
        marginTop:10,
        marginLeft:10,
        borderRadius:20,
    },
    isSeeAlll:{
       width:150,
    },
    shadowProp: {  
        shadowOffset: {width: 2, height: 4},  
        shadowColor: 'black',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
      },  
    logo:{
        height:60,
        width:60,
        color:"white"
      },
     title:{
        color:"white",
        fontWeight:"600"
     } 
})