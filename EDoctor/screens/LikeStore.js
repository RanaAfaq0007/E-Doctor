import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';

const LikeStore = () => {
  const navigation = useNavigation();
  const items = useSelector((state) => state.like);
  const alldata = items.length;
  console.log(alldata);
  
  
  return (

   <View>
    {
      
      items.map((item)=>(
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
    
    )} key={item.name}>
    <View style={styles.itemstyle} >
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
       <TouchableOpacity>
       <Ionicons name="heart-outline" size={35} color="lightgreen"  />
       </TouchableOpacity>
   </View>
  </TouchableOpacity>
      ))
    
}
  </View>
  )

}

export default LikeStore

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