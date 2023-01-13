import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './Navigations/MainStackNavigator';
import store from './store/store';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {
  const [loggedIn,setLoggedIn] = useState(null);

  const detectLogin = async ()=>{
    const user = await AsyncStorage.getItem('user');
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }

  useEffect  (()=>{
    detectLogin()
  },[])
  
  return (
    <Provider store={store}>
   <NavigationContainer>
   <MainStackNavigator/>
   </NavigationContainer>
   </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
