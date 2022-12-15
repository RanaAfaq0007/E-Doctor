import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash'
import LoginScreen from '../screens/LoginScreen';
import Register from '../screens/Register';
import BottomNavigationBar from './BottomNavigationBar';
import AllDoctors from '../screens/AllDoctors';
import AllRecomended from '../screens/AllRecomended';
import AllSpecialists from '../screens/AllSpecialists';
import EyeCat from '../screens/Specialists/EyeCat';
import BrainCat from '../screens/Specialists/BrainCat';
import NerveCat from '../screens/Specialists/NerveCat';
import DentalCat from '../screens/Specialists/DentalCat';
import ChildCat from "../screens/Specialists/ChildCat";
import MouthCat from "../screens/Specialists/MouthCat";
import CardioCat from "../screens/Specialists/CardioCat";
import ArthoCat from "../screens/Specialists/ArthoCat";
import DoctorDetail from '../screens/DoctorDetails/DoctorDetail';
import PatientsDetail from '../screens/PatientsDetail';



const Stack = createNativeStackNavigator();

    const MainStackNavigator = () => {
      
        return (
          <Stack.Navigator >
             <Stack.Screen name="Splash" component={Splash} />
             <Stack.Screen name="Login" component={LoginScreen} />
             <Stack.Screen name="home" component={BottomNavigationBar} />
             <Stack.Screen name="register" component={Register} />
             <Stack.Screen name="alldoctors" component={AllDoctors} />
             <Stack.Screen name="allrecommended" component={AllRecomended} />
             <Stack.Screen name="All Specialists" component={AllSpecialists} />
             <Stack.Screen name="Eye's Specialists" component={EyeCat} />
             <Stack.Screen name="Brain Specialists" component={BrainCat} />
             <Stack.Screen name="Nerve Specialists" component={NerveCat} />
             <Stack.Screen name="Mouth Specialists" component={MouthCat} />
             <Stack.Screen name="Dental Specialists" component={DentalCat} />
             <Stack.Screen name="Cardio Specialists" component={CardioCat} />
             <Stack.Screen name="Artho Specialists" component={ArthoCat} />
             <Stack.Screen name="Child Specialists" component={ChildCat} />
             <Stack.Screen name="Doctors Detail" component={DoctorDetail} />
             <Stack.Screen name="Patients Appointment" component={PatientsDetail} />
          </Stack.Navigator>
        );
      }
  


export  {MainStackNavigator};