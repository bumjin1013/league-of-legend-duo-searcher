import React from "react";

import LandingScreen from "./src/components/LandingScreen/LandingScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from "./src/components/ChatScreen/ChatScreen";
import Icon from 'react-native-vector-icons/AntDesign';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise'; 
import ReduxThunk from 'redux-thunk';
import Reducer from './src/_reducers'
import Auth from './src/hoc/auth';
import MyPageStack from "./src/components/MyPageScreen/Stack/MyPageStack";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);


const Tab = createBottomTabNavigator();


function App () {

  return (
    <Provider
    store={createStoreWithMiddleware(
        Reducer,
        compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )}
>
<NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#282831'
          }
        }}>
        <Tab.Screen 
          name="ChatTab" 
          component={Auth(ChatScreen, null)} 
          options={{ 
            headerShown: false, 
            tabBarIcon: () => <Icon name='message1' size={28} color='white'/>
            }}/>
        <Tab.Screen 
          name="LandingTab" 
          component={Auth(LandingScreen, null)} 
          options={{ 
            headerShown: false,
            tabBarIcon: () => <Icon name='home' size={28} color='white'/> 
          }}/>
        <Tab.Screen 
          name="MyPageTab" 
          component={MyPageStack} 
          options={{ 
            headerShown: false,
            tabBarIcon: () => <Icon name='user' size={28} color='white'/> 
            }}/>
      </Tab.Navigator>
    </NavigationContainer>
</Provider>
    
    
  )
}

export default App;
