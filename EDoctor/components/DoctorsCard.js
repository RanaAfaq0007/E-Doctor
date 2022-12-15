import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DoctorsCard = ({genre,Name}) => {
  
    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
        return `#${randomColor}`;
      };
return (
    <View style={[styles.container,styles.shadowProp ]}>
     <Image 
     source={{
        uri:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     
    }}
    style={styles.logo}
     />
    <View style={styles.secondContiner}>
    <Text style={styles.title}>{Name}</Text>
      <Text style={styles.title}>{genre} Speclialist</Text>
    </View>
      
    </View>
  );
  
}

export default DoctorsCard

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        height:220,
        width:200,
        justifyContent: 'center',
        marginTop:10,
        marginLeft:10,
        borderRadius:20,
        
    },
    secondContiner:{
        backgroundColor:"gray",
        width:200,
        alignItems:'center',
        justifyContent:"center",
        height:60
    },
    shadowProp: {  
        shadowOffset: {width: 2, height: 4},  
        shadowColor: 'black',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
      },  
    logo:{
        height:150,
        width:200,
        borderTopLeftRadius:16,
        borderTopRightRadius:16

        
      },
     title:{
        color:"white",
     } 
})