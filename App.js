import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListUserScreen from './screen/listUserScreen';
import CreatUserScreen from './screen/createUserScreen';
import DetailUserScreen from './screen/detailUserScreen';
import { 
  View, 
  Text, 
  TouchableOpacity 
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function MyStack(){
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      
      <Stack.Screen 
      name="ListUser" 
      component={ListUserScreen} 
      options={{ 
        title : "",
        header:()=>(
          <View>

          </View>
        )
        }} />

      <Stack.Screen 
      name="CreateUser" 
      component={CreatUserScreen} 
      options={{ title : "",
      headerStyle: {
        backgroundColor: '#AD84BF',
        
      },
      
      headerLeft:() => (
        <View style={{ flex : 1, flexDirection: "row"}}>
          <TouchableOpacity style={{ padding: 10 }} 
          onPress={(props) => {
            navigation.navigate('ListUser')
          }}>
          <AntDesign name="doubleleft" size={24} color="white"  />
          </TouchableOpacity>
          <View style={{ marginLeft: "25%"}}>
            <Text style={{ color :"white", fontSize: 18 ,marginTop: 10}}>CREATE USER</Text>
        </View>
        </View>
        
      )}} />

      <Stack.Screen 
      name="DetailUser" 
      component={DetailUserScreen} 
      options={{ title : "",
      headerStyle: {
        backgroundColor: '#AD84BF',
        
      },
      
      headerLeft:() => (
        <View style={{ flex : 1, flexDirection: "row",}}>
          <TouchableOpacity style={{ padding: 10 }} 
          onPress={(props) => {
            navigation.navigate('ListUser')
          }}>
          <AntDesign name="doubleleft" size={24} color="white" onPress={(props) => {
            navigation.navigate('ListUser')
          }} />
          </TouchableOpacity>
          <View style={{ marginLeft: "25%"}}>
            <Text style={{ color :"white", fontSize: 18 ,marginTop:10 }}>INFO OF USER</Text>
        </View>
        </View>
        
      )}} />

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

