import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const logo = require("../assets/edoctor.png");
import Ionicons from '@expo/vector-icons/Ionicons';



const SpeclialistCard = ({genre,total}) => {
    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
        return `#${randomColor}`;
      };
        
  return (
    <View style={[styles.container,styles.shadowProp, {backgroundColor:generateColor()}]}>
     <Ionicons name="heart-sharp" size={59} color="white"  />
      <Text style={styles.title}>{genre}</Text>
      <Text style={styles.title}>Speclialist</Text>
      <Text style={styles.title}>{total} Specialists</Text>
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
        width:60
      },
     title:{
        color:"white",
     } 
})