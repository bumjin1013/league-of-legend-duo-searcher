import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import axios from 'axios';

const RegisterScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [summoner, setSummoner] = useState('');

    
    const register = () => {

        if(email === ''){
            Alert.alert('이메일을 입력해주세요')
        } else if(password === ''){
            Alert.alert('비밀번호를 입력해주세요')
        } else if(passwordConfirm === ''){
            Alert.alert('비밀번호 확인을 입력해주세요')
        } else if(summoner === ''){
            Alert.alert('소환사명을 입력해주세요')
        } else {
            let body = {
                email: email,
                password: password,
                summoner: summoner
            }
            axios.post('http://localhost:5000/api/users/register', body)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('err', err);
            })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.contents}>
                <Text style={styles.text}>이메일</Text>
                <TextInput style={styles.textInput} onChangeText={setEmail}/>
            </View>
            <View style={styles.contents}>
                <Text style={styles.text}>비밀번호</Text>
                <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={setPassword}/>
            </View>
            <View style={styles.contents}>
                <Text style={styles.text}>비밀번호 확인</Text>
                <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={setPasswordConfirm}/>
            </View>
            <View style={styles.contents}>
                <Text style={styles.text}>소환사명</Text>
                <TextInput style={styles.textInput} onChangeText={setSummoner}/>
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={register}>
                <Text style={styles.submitText}>회원가입</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#494959',
        padding: 15
    },
    contents: {
        marginBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textInput: {
        borderBottomWidth: 2,
        borderRadius: 5, 
        height: 35,
        borderColor: '#A0A0A0',
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        fontSize: 16,
        color: 'white'
    },
    submitBtn: {
        backgroundColor: '#947118',
        borderRadius: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
    },
    submitText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})
