import { Button, ScrollView, StyleSheet, Text, TextInput,TouchableOpacity,View } from 'react-native'
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from '@expo/vector-icons/Ionicons';



const PatientsDetail = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate,setSelectedDate] = useState('select the Date')

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

  return (
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
        maxLength={140}
        multiline={true}
        placeholderTextColor="#003f5c"
        />
      </View>
      
    </View>    
  </ScrollView>
  )
}

export default PatientsDetail

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    margin:5
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