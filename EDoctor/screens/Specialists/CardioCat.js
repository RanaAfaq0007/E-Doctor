import React, { useEffect, useState } from 'react';
import {View, FlatList, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { add } from '../../store/likeSlice';


// const DATA = [
//   {
//     id: '1',
//     title: 'Doctor Ramsey',
//     specs:"Cardio Specialists",
//     college:'Ramsey College',
//     review:'234 (4622 reviews)'
//   },
//   {
//     id: '2',
//     title: 'Doctor Ramsey',
//     specs:"Cardio Specialists",
//     college:'Ramsey College',
//     review:'234'
//   },
//   {
//     id: '3',
//     title: 'Doctor Ramsey',
//     specs:"Cardio Specialists",
//     college:'Ramsey College',
//     review:'234'
//   },
//   {
//     id: '4',
//     title: 'Doctor Ramsey',
//     specs:"Cardio Specialists",
//     college:'Ramsey College',
//     review:'234'
//   },
//   {
//     id: '5',
//     title: 'Doctor Ramsey',
//     specs:"Cardio Specialists",
//     college:'Ramsey College',
//     review:'234'
//   },
// ];




const CardioCat = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const[doctorsData,setDoctorsData] = useState();
  const[loading,setLoading] = useState(true);
  const [selected,setSelected] = useState(new Map());

  const getCardioDoctorsData = async () =>{
       try {
        const response = await fetch(
          "http://192.168.100.49:5000/cardio/getAll"
          );
          const myData = await response.json();
          setDoctorsData(myData);
          setLoading(false);
       } catch (error) {
        console.log(error)
       }
  }
 

  useEffect(()=>{
     getCardioDoctorsData();
  },[])

  const handleAdd = (product,id) => {
    // const tempData = [];
    // doctorsData.map((item,ind)=>{
    //   if (ind == index){
    //     tempData.push(true);
    //     console.log(ind);
    //   } else {
    //     tempData.push(false);
    //   }
    // });
    const newSelected = new Map(selected);
    newSelected.set(id,!selected.get(id));
    setSelected(newSelected);
    console.log(newSelected);
    dispatch(add(product));
    // setLiked(tempData);
    // console.log(tempData);        
  }

  

  const cardioCard = ({item}) =>{
  const color = selected.get(item._id) ? "green" :'gray';
 
    return(
      
      <TouchableOpacity onPress={()=>navigation.navigate("Doctors Detail",
      {
        id:item._id,
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
         <TouchableOpacity  onPress={()=>handleAdd(item,item._id)}>
              <View >
                
              <Ionicons 
              name = "heart"  
              size={35} 
               style={{
                color
               }}             
               />
              </View>
         </TouchableOpacity>


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
      extraData={selected}
      renderItem={ cardioCard}
      keyExtractor={item => item._id}
    />
        </View>) 
      }
  
  </View>
  )
}

export default CardioCat
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  loadingIndicator:{
      minHeight:"100%",
      display:"flex",
      justifyContent:'center',
      alignItems:"center",
      
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
});
