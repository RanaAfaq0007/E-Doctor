import {View, FlatList, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'

const SkinCat = () => {
  const navigation = useNavigation();
  const[doctorsData,setDoctorsData] = useState();
  const [loading,setLoading] = useState(true);
 
  const getSkinDoctorsData = async () =>{
    try {
     const response = await fetch(
       "http://192.168.100.49:5000/skin/getAll"
       );
       const myData = await response.json();
       setDoctorsData(myData);
       setLoading(false);
    } catch (error) {
     console.log(error)
    }
}
useEffect(()=>{
  getSkinDoctorsData();
},[])

const skinCard = ({item}) =>{
  return(
    <TouchableOpacity onPress={()=>navigation.navigate("Doctors Detail",
    {
      Name:item.name,
      Image:item.imageUrl,
      college:item.college,
      specialist:item.specialist,
      address:item.address,
      description:item.description,
      workingHours:item.workingHours,
      experience:item.experience,
      patients:item.patients
    }
    
    )}>
    <View style={styles.itemstyle}>
     <Image
     source={{uri:item.imageUrl }}
     style={styles.logo}
     />
     <View>
     <Text style={styles.title}>
       {item.name}
     </Text>
     <View style={styles.reviews}>
     <Ionicons name="star-half" size={20} color="green"  />
     <Text style={styles.reviewText}>
       ({item.patients}) Reviews
     </Text>
       </View>
     <Text style={styles.collegeText}>
       {item.college}
     </Text>
       </View>
       <Ionicons name="heart-outline" size={35} color="lightgreen"  />
   </View>
  </TouchableOpacity>
  );
}
  return (
    <View style={styles.container}>
       {
        loading ? (<View style={styles.loadingIndicator}><ActivityIndicator size="large" color="green"/></View>)
        : (<View> 
               <FlatList
      data={doctorsData}
      renderItem={skinCard}
      keyExtractor={item => item._id}
    />
        </View>) 
      }
  </View>
  )
}

export default SkinCat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  loadingIndicator:{
    minHeight:"100%",
    display:"flex",
    justifyContent:'center',
    alignItems:"center"
},
  reviewText:{
    fontSize:12,
    padding:8

  },
  collegeText:{
    fontSize:10,
    color:"gray"
  },
  reviews:{
    flexDirection:'row',
    alignItems:'center'

  
  },
  logo:{
    height:120,
    borderRadius:20,
    width:130
  },

  itemstyle: {
    flexDirection:'row',
    margin:2,
    borderWidth:1,
    height: 130,
    borderRadius:20,
    borderColor:'lightgray',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
  },
})              