import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import LargeButton from '../../components/LargeButton';
import { useNavigation } from '@react-navigation/native';


const DoctorDetail = ({route}) => {
  const navigation = useNavigation();
  const name = route.params.Name;
  const imageUrl = route.params.Image;
  const college = route.params.college;
  const specialist = route.params.specialist;
  const address = route.params.address;
  const description = route.params.description;
  const workingHours = route.params.workingHours;
  const experience = route.params.experience;
  const patients = route.params.patients;

 
  
  const onPressBookAnAppointmentHandler = (name,specialist,address) => {
         navigation.navigate('Patients Appointment',{
          name,
          specialist,
          address,
         })
  }
  return (
   <View>
     <View style={styles.item}>
    <Image
    source={{uri:imageUrl}}
    style={styles.logo}
    />
    <View>
    <Text style={styles.title}>
      {name}
    </Text>
    <View style={styles.reviews}>
    <Ionicons name="star-half" size={20} color="green"  />
    <Text style={styles.reviewText}>
      234 (4622 reviews)
    </Text>
    

      </View>
    <Text style={styles.collegeText}>
      {college}
    </Text>
      </View>


  </View>
  <View style={styles.experienceContainer}>
    <View style={styles.expContainerChild}>
    <Ionicons name="people-circle" size={40} color="green"  />
    <Text style={styles.expText}>{patients}</Text>
    <Text>Patients</Text>
    </View>
    <View style={styles.expContainerChild}>
    <Ionicons name="person-circle" size={40} color="green"  />
    <Text style={styles.expText}>{experience}</Text>
    <Text>Experience</Text>
    </View>
    <View style={styles.expContainerChild}>
    <Ionicons name="chatbox-ellipses" size={35} color="green"  />
    <Text style={styles.expText}>5000+</Text>                      
    <Text>Reviews</Text>
    </View>
  </View>
<View>
<Text style={styles.heading}>About Doctor</Text>
  <Text style={styles.desc}>{description}</Text>
</View>
<View>
<Text style={styles.heading}>Working Hours</Text>
  <Text style={styles.desc}>{workingHours}</Text>
</View>
<View>
<Text style={styles.heading}>Address</Text>
  <Text style={styles.desc}>{address}</Text>
</View>
<View style={styles.btn}>
<LargeButton onLoginHandler={()=>onPressBookAnAppointmentHandler(name,address,specialist)} title={"Book An Appointment"}/>
</View>

   </View>
  )
}

export default DoctorDetail

const styles = StyleSheet.create({
    reviewText:{
        fontSize:12,
        padding:8
      },
      btn:{
        alignItems:"center",
      },
      desc:{
        paddingLeft:10
      },

      heading:{
        fontSize:20,
        fontWeight:"bold",
        margin:4
      },
      expText:{
        fontWeight:'bold',
        color:"green",
        fontSize:18,
        padding:5,
        
      },
      expContainerChild:{
        alignItems:'center'
        
      },
      experienceContainer:{
        borderWidth:1,
        padding:15,
        margin:12,
        borderRadius:16,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:150
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
        fontSize: 12,
        color:"green",
        fontWeight:'bold'
      },
})