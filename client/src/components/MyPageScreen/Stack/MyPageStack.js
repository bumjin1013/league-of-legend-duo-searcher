import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Certification from '../Certification';
import MyPageScreen from '../MyPageScreen';
import Auth from '../../../hoc/auth';

const Stack = createStackNavigator();

const MyPageStack = () => {

    return (
        <Stack.Navigator initalRouteName="Main">
            <Stack.Screen name="MyPage" component={Auth(MyPageScreen, null)} options={{ headerShown: false}}/>
            <Stack.Screen name="Certification" component={Auth(Certification, null)} options={{ headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default MyPageStack

const styles = StyleSheet.create({})
