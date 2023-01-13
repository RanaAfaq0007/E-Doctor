import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

const DoctorsCard = ({}) => {
  const[doctorsData,setDoctorsData]=useState();

  const getDoctorsData = async () =>{
    try {
      const response = await fetch(
        "http://192.168.100.49:5000/topdoctors/getAll"
      )
      const myData = await response.json();
      setDoctorsData(myData);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getDoctorsData();
  },[])
  

  const doctorsCard = ({item}) =>{
    <View style={[styles.container,styles.shadowProp ]}>
    <Image 
    source={{uri:item.imageUrl}}
   style={styles.logo}
    />
   <View style={styles.secondContiner}>
   <Text style={styles.title}>{item.name}</Text>
     <Text style={styles.title}>{item.specialist}</Text>
   </View>
     
   </View>
  }
 
return (
   <FlatList
    horizontal
    data = {doctorsData}
    renderItem={doctorsCard}
    keyExtractor={item => item._id}
   />
  );
  
}

export default DoctorsCard

const styles = StyleSheet.create({
    dcontainer:{
        alignItems: 'center',
        height:220,
        width:200,
        justifyContent: 'center',
        marginTop:10,
        marginLeft:10,
        borderRadius:20,
        
    },
    dsecondContiner:{
        backgroundColor:"gray",
        width:200,
        alignItems:'center',
        justifyContent:"center",
        height:60
    },
    dshadowProp: {  
        shadowOffset: {width: 2, height: 4},  
        shadowColor: 'black',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
      },  
    dlogo:{
        height:150,
        width:200,
        borderTopLeftRadius:16,
        borderTopRightRadius:16

        
      },
     dtitle:{
        color:"white",
     } 
})