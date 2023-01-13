import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash'
import LoginScreen from '../screens/LoginScreen';
import Register from '../screens/Register';
import BottomNavigationBar from './BottomNavigationBar';
import AllSpecialists from '../screens/AllSpecialists';
import CardioCat from "../screens/Specialists/CardioCat";
import OrthoCat from "../screens/Specialists/OrthoCat";
import DoctorDetail from '../screens/DoctorDetails/DoctorDetail';
import PatientsDetail from '../screens/PatientsDetail';
import SkinCat from '../screens/Specialists/SkinCat';
import Psychatrist from '../screens/Specialists/Psychatrist';
import Pulmo from '../screens/Specialists/Pulmo';
import NeuroCat from "../screens/Specialists/NeuroCat";
import LikeStore from '../screens/LikeStore';
import Loading from '../components/Loading';



const Stack = createNativeStackNavigator();

    const MainStackNavigator = () => {
         
        return (
          <Stack.Navigator 
            headerMode = "none"
         >
             <Stack.Screen name="Splash" component={Splash} />
             <Stack.Screen name="Loading" component={Loading} />
             <Stack.Screen name="Login" component={LoginScreen} />
             <Stack.Screen name="home" component={BottomNavigationBar}/>
             <Stack.Screen name="register" component={Register} />
             <Stack.Screen name="All Specialists" component={AllSpecialists} />
             <Stack.Screen name="Cardio Specialists" component={CardioCat} />
             <Stack.Screen name="Orthopedic Specialists" component={OrthoCat}/>
             <Stack.Screen name="Doctors Detail" component={DoctorDetail} />
             <Stack.Screen name="Patients Appointment" component={PatientsDetail} />
             <Stack.Screen name="Skin Specialists" component={SkinCat} />
             <Stack.Screen name="Psychatrist" component={Psychatrist} />
             <Stack.Screen name="Pulmonologist Specialists" component={Pulmo} />
             <Stack.Screen name="Neuro Specialists" component={NeuroCat} />
             <Stack.Screen name="Liked" component={LikeStore} />
          </Stack.Navigator>
        );
      }
  


export  {MainStackNavigator};