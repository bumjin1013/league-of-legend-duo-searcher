import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>준비중입니다.</Text>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282831',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }
})
