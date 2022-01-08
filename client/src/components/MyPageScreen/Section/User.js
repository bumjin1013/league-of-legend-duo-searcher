import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height / 4.5; 

const User = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>로그인</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default User

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282831',
        height: HEIGHT,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginBtn: {
        backgroundColor: '#947118',
        width: '50%',
        borderRadius: 5,
        height: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginText: {
        color: 'white', 
        fontSize: 18,
        fontWeight: 'bold',
        
    }
})
