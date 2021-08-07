import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListUserScreen from './screen/listUserScreen';
import CreatUserScreen from './screen/createUserScreen';
import DetailUserScreen from './screen/detailUserScreen';


const Stack = createNativeStackNavigator();

function MyStack(){
  return (
    <Stack.Navigator>
      
      <Stack.Screen 
      name="ListUser" 
      component={ListUserScreen} 
      options={{ title:"List User" }} />

      <Stack.Screen 
      name="CreateUser" 
      component={CreatUserScreen} 
      options={{ title:"Create User" }} />

      <Stack.Screen 
      name="DetailUser" 
      component={DetailUserScreen} 
      options={{ title:"Detal User" }} />

    </Stack.Navigator>
  )
} 

export default function App() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  )
}

