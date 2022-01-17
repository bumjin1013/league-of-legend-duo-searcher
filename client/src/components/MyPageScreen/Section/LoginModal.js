import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Modal, View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { loginUser, auth } from '../../../_actions/user_actions';

const Height = Dimensions.get('window').height / 2; 

const LoginModal = (props) => {

    const dispatch = useDispatch();

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        let body = {
            email: email,
            password: password
        }
        dispatch(loginUser(body))
        .then(response => {
            if(response.payload.loginSuccess){
                props.onChangeVisible(false);
                dispatch(auth());
            }
        })
    }
    return (
        <Modal transparent={true} visible={props.visible} animationType='slide'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => props.onChangeVisible(false)}>
                                <Icon name='close' size={22} color='white' />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.idContainer}>
                            <Text style={styles.idText}>아이디</Text>
                            <TextInput style={styles.idTextInput} onChangeText={setEmail}/>
                        </View>
                        <View style={styles.passwordContainer}>
                            <Text style={styles.idText} >비밀번호</Text>
                            <TextInput style={styles.idTextInput} secureTextEntry={true} onChangeText={setPassword}/>
                        </View>
                        <TouchableOpacity style={styles.loginBtn} onPress={login}>
                            <Text style={styles.loginText}>로그인</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.kakaoLoginBtn}>
                            <Image source={require('../../../image/kakao.png')} style={styles.kakaoImage}/>
                            <Text style={styles.loginText}>카카오 로그인</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.facebookLoginBtn}>
                            <Image source={require('../../../image/facebook.png')} style={styles.facebookImage}/>
                            <Text style={styles.loginText}>페이스북 로그인</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.registerText}>회원가입</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    )
}

export default LoginModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width: '100%'
    },
    modalView: {
        width: '90%',
        height: 380, 
        marginTop: -50,
        backgroundColor: '#494959',
        borderRadius: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    idText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    idTextInput: {
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
        fontSize: 15,
        color: 'white'
    },
    loginBtn: {
        marginTop: 5,
        width: '100%',
        height: 35,
        backgroundColor: '#947118',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    kakaoLoginBtn: {
        marginTop: 5,
        width: '100%',
        height: 35,
        backgroundColor: 'rgb(222, 193, 67)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        flexDirection :'row'
    },
    facebookLoginBtn: {
        marginTop: 5,
        width: '100%',
        height: 35,
        backgroundColor: 'rgb(64, 85, 154)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        flexDirection: 'row'
    },
    loginText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    kakaoImage: {
        width: 30,
        height: 30,
        marginRight: 5
    },
    facebookImage: {
        width: 25,
        height: 25,
        marginRight: 8,
        marginBottom: 2
    },
    registerBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18
    },
    registerText: {
        color: 'white', 
        fontSize: 15,
        fontWeight: 'bold'
    }
    
})
