import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import LargeButton from '../../components/LargeButton';
import { useNavigation } from '@react-navigation/native';


const DoctorDetail = () => {
  const navigation = useNavigation();
  const onPressBookAnAppointmentHandler = () => {
         navigation.navigate('Patients Appointment')
  }
  return (
   <View>
     <View style={styles.item}>
    <Image
    source={{
      uri:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }}
    style={styles.logo}
    />
    <View>
    <Text style={styles.title}>
      Doctor Ramsey
    </Text>
    <View style={styles.reviews}>
    <Ionicons name="star-half" size={20} color="green"  />
    <Text style={styles.reviewText}>
      234 (4622 reviews)
    </Text>
    

      </View>
    <Text style={styles.collegeText}>
      Ramsey College Cardio Specialist 
    </Text>
      </View>
      <Ionicons name="heart-outline" size={35} color="lightgreen"  />


  </View>
  <View style={styles.experienceContainer}>
    <View style={styles.expContainerChild}>
    <Ionicons name="people-circle" size={40} color="green"  />
    <Text style={styles.expText}>5000+</Text>
    <Text>Patients</Text>
    </View>
    <View style={styles.expContainerChild}>
    <Ionicons name="person-circle" size={40} color="green"  />
    <Text style={styles.expText}>5+</Text>
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
  <Text style={styles.desc}>Broadly speaking, happiness and wellbeing are thought to be essential components for a successful and fulfilling life
In fact, in 2012, the United Nations proclaimed March 20th to be the International Day of Happiness to recognize the importance of wellbeing as a universal goal for all people. Indeed, recommendations to public policy outlined a more balanced approach to economic growth, intending</Text>
</View>
<View>
<Text style={styles.heading}>Working Hours</Text>
  <Text style={styles.desc}>09:00 to 12:00 AM</Text>
</View>
<View style={styles.btn}>
<LargeButton onLoginHandler={onPressBookAnAppointmentHandler} title={"Book An Appointment"}/>
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
        alignItems:"center"
      },
      desc:{
        padding:10
      },

      heading:{
        fontSize:20,
        fontWeight:"bold",
        margin:8
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
        fontSize: 16,
        fontWeight:'bold'
      },
})