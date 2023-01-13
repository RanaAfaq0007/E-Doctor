import { Alert, Button, ScrollView, StyleSheet, Text, TextInput,TouchableOpacity,View } from 'react-native'
import React, { useEffect, useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from '@expo/vector-icons/Ionicons';
import LargeButton from '../components/LargeButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const PatientsDetail = ({route}) => {
  const navigation= useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate,setSelectedDate] = useState('select the Date')
  const [patientName,setPatientName] = useState('');
  const [session,setSession] = useState('Morning');
  const [patientId,setPatientId] =useState( ''); 
  const [age,setAge] = useState('');
  const [desc,setDesc] = useState('');
  const [docName,setDocName] = useState('');
  const [docspecialist,setDocSpecialist] = useState('');
  const [docaddress,setDocAddress] = useState('');
  const [loading,setLoading] = useState(true);



  const  name = route.params.name;
  const specialist = route.params.specialist;
  const address = route.params.address;

  const saveData = () =>{
    setDocName(name);
    setDocAddress(address);
    setDocSpecialist(specialist);
    setSession('evening');
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    
     setSelectedDate(date);   
    hideDatePicker();
  };
  const userData = async()=>{
   try {
    const user = await AsyncStorage.getItem('user');
    const currenUserId = JSON.parse(user);
    const id = currenUserId._id;
   
    if (id != null) {
      setPatientId(id);
      setLoading(false);
      return id;
    }
   } catch (error) {
    Alert.alert("Try Again !","Something went wrong...")
   }
  }

  useEffect(()=>{
    setLoading(true);
    userData();
    saveData();
   
  },[]);
  

  const submitHandler = async () => {
    console.log(name,docName,docaddress,docspecialist,patientId,session);
    
     fetch("http://192.168.100.49:5000/appointment/",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "name":patientName,
        "session":session,
        "date":selectedDate,
        "doctorName":docName,
        "specialist":docspecialist,
        "address":docaddress,
        "patientsAge":age,
        "patientsId":patientId,
        "patientsDesc":desc
      })
     }).then(res=>res.json()).then(
      navigation.navigate('home')
     )
   
    
  };
 

  return (
   <>
   {
    loading ? (<View style={styles.loadingIndicator}><ActivityIndicator size={"large"} color={"green"}/></View>):

   (
    <ScrollView>
      <View style={styles.container}>
      <View >
        <Text style={styles.headSpecs}>Select Session</Text>
        <View style={styles.sessionContainer}>
          <TouchableOpacity>
            <View style={styles.morningCont}>
            <Text>Morning</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.eveningCont}>
            
            <Text>Evening</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.headSpecs}>Full Name*</Text>
      <View style={styles.inputView}>
      <TextInput  
        style={styles.inputText}
        placeholder="Enter Full Name"
        value={patientName}
        onChangeText={(e)=>setPatientName(e)}
        placeholderTextColor="#003f5c"
        />
      </View>
      <Text style={styles.headSpecs}>Select The Date</Text>
     
      <TouchableOpacity onPress={showDatePicker} style={styles.dateSelector}>
        <Text>{selectedDate.toString()}</Text>
        <Ionicons name="ios-calendar-outline" size={32} color="green"  />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
       <Text style={styles.headSpecs}>Patient's Age*</Text>
      <View style={styles.inputView}>
      <TextInput  
        style={styles.inputText}
        placeholder="Enter Patient's Age"
        value={age}
        onChangeText={(e)=>setAge(e)}
        keyboardAppearance='default'
        keyboardType='decimal-pad'
        maxLength={2}
        placeholderTextColor="#003f5c"
        />
      </View>
      <Text style={styles.headSpecs}>What are you Feeling*</Text>
      <View style={styles.inputViewProblem}>
      <TextInput  
        style={styles.inputText}
        placeholder="Write Brief about your problem"
        keyboardAppearance='default'
        value={desc}
        onChangeText={(e)=>setDesc(e)}
        maxLength={140}
        multiline={true}
        placeholderTextColor="#003f5c"
        />

      </View>

      <LargeButton title={"Book An Appointment"} onLoginHandler={submitHandler}/>
      
    </View>    
  </ScrollView>
   )
}
   </>
  )
}

export default PatientsDetail

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    margin:5
  },
  loadingIndicator:{
    minHeight:"100%",
    display:"flex",
    justifyContent:'center',
    alignItems:"center",
    
},
  headSpecs:{
    fontWeight:"bold",
    fontSize:16,
    margin:10
  },
  inputView:{
    width:"90%",
    backgroundColor:"white",
    borderWidth:1,
    borderRadius:10,
    borderColor:"lightgray",
    height:50,
    justifyContent:"center",
    padding:20,
    marginTop:5,
    borderRadius:15,
    marginLeft:12,
    marginRight:12
  },
  inputViewProblem:{
    width:"90%",
    backgroundColor:"white",
    borderWidth:1,
    borderRadius:10,
    borderColor:"lightgray",
    height:100,
    padding:2,
    marginTop:2,
    borderRadius:8,
    marginLeft:12,
    marginRight:12
  },
  dateSelector:{
    flexDirection:"row",
    alignItems:'center',
    padding:6,
    borderWidth:1,
    marginTop:5,
    borderRadius:15,
    marginLeft:12,
    marginRight:12
  },
  inputText:{
    height:50,
    color:"black"
  },
  sessionContainer:{
    flexDirection:'row',
  },
  morningCont:{
    height:45,
    justifyContent:'center',
    borderWidth:1,
    margin:12,
    width:150,
    alignItems:'center',
    borderColor:"lightgray",
    color:'white',
    borderRadius:16
  },
  eveningCont:{
    
    height:45,
    justifyContent:'center',
    borderWidth:1,
    margin:12,
    width:150,
    alignItems:'center',
    borderColor:"lightgray",
    color:'white',
    borderRadius:16

  }
})