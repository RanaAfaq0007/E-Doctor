import React from 'react';
import {View, FlatList, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const DATA = [
  {
    id: '1',
    title: 'Doctor Ramsey',
    specs:"Cardio Specialists",
    college:'Ramsey College',
    review:'234 (4622 reviews)'
  },
  {
    id: '2',
    title: 'Doctor Ramsey',
    specs:"Cardio Specialists",
    college:'Ramsey College',
    review:'234'
  },
  {
    id: '3',
    title: 'Doctor Ramsey',
    specs:"Cardio Specialists",
    college:'Ramsey College',
    review:'234'
  },
  {
    id: '4',
    title: 'Doctor Ramsey',
    specs:"Cardio Specialists",
    college:'Ramsey College',
    review:'234'
  },
  {
    id: '5',
    title: 'Doctor Ramsey',
    specs:"Cardio Specialists",
    college:'Ramsey College',
    review:'234'
  },
];



const CardioCat = () => {
  const navigation = useNavigation();
  
  const onPressDoctor = () => {
     navigation.navigate("Doctors Detail")
  }
  return (
    <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item}) => (
       <TouchableOpacity onPress={onPressDoctor}>
         <View style={styles.item}>
          <Image
          source={{
            uri:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }}
          style={styles.logo}
          />
          <View>
          <Text style={styles.title}>
            {item.title}
          </Text>
          <View style={styles.reviews}>
          <Ionicons name="star-half" size={20} color="green"  />
          <Text style={styles.reviewText}>
            {item.review}
          </Text>
          

            </View>
          <Text style={styles.collegeText}>
            {item.college}.{item.specs} 
          </Text>
            </View>
            <Ionicons name="heart-outline" size={35} color="lightgreen"  />


        </View>
       </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  </View>
  )
}

export default CardioCat
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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
    height:128,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    width:130
  },

  item: {
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
    fontSize: 16,
    fontWeight:'bold'
  },
});
