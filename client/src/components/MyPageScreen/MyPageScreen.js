import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import User from './Section/User';
import LoginModal from './Section/LoginModal';


const MyPageScreen = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <User onChangeVisible={setModalVisible}/>
            <LoginModal visible={modalVisible} onChangeVisible={setModalVisible}/>
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
