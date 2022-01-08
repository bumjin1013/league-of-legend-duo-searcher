import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import User from './Section/User';

const MyPageScreen = () => {
    return (
        <View style={styles.container}>
            <User/>
        </View>
    )
}

export default MyPageScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#404048',
        flex: 1
    }
})
