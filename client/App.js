import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from "./src/components/LandingScreen/LandingScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from "./src/components/ChatScreen/ChatScreen";
import MyPageScreen from "./src/components/MyPageScreen/MyPageScreen";
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function App () {

  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#282831'
          }
        }}>
        <Tab.Screen 
          name="Chat" 
          component={ChatScreen} 
          options={{ 
            headerShown: false, 
            tabBarIcon: () => <Icon name='message1' size={28} color='white'/>
            }}/>
        <Tab.Screen 
          name="Landing" 
          component={LandingScreen} 
          options={{ 
            headerShown: false,
            tabBarIcon: () => <Icon name='home' size={28} color='white'/> 
          }}/>
        <Tab.Screen 
          name="MyPage" 
          component={MyPageScreen} 
          options={{ 
            headerShown: false,
            tabBarIcon: () => <Icon name='user' size={28} color='white'/> 
            }}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  )
}

export default App;
