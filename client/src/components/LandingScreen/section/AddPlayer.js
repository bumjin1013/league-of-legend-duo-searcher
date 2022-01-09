import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, Modal, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { Dimensions } from 'react-native';
import { addMatch } from '../../../_actions/match_actions';
import moment from 'moment';
import axios from 'axios';
const WIDTH = Dimensions.get('window').height / 20; 
const TIERSIZE = Dimensions.get('window').height / 18;

const AddPlayer = (props) => {

    const [position, setPosition] = useState('');
    const [name, setName] = useState('');
    const [memo, setMemo] = useState('');
    const [tier, setTier] = useState('');

    const onPressPosition = (e) => {
        position === e ? setPosition('') : setPosition(e)
    }

    const onPressTier = (e) => {
        tier === e ? setTier('') : setTier(e);
    }

    const onPressClose = () => {
        props.changeVisible(false);
        setPosition('');
        setName('');
        setMemo('');
        setTier('');
    }

    const onPressSubmit = () => {
        
        if(name === ''){
            Alert.alert('소환사 이름을 입력해주세요');
        } else if(position === ''){
            Alert.alert('포지션을 선택해주세요')
        } else if(tier === ''){
            Alert.alert('티어를 선택해주세요')
        } else if(memo === ''){
            Alert.alert('메모를 입력해주세요')
        } else {
            let body = {
                name: name,
                tier: tier,
                position: position,
                memo: memo,
                created: Date()
            }
            axios.post('http://192.168.0.8:5000/api/matches/match', body)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })

            props.changeVisible(false);
        }
    }

    return (
         <Modal transparent={true} visible={props.visible} animationType='slide'>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>소환사 등록하기</Text>
                    <TouchableOpacity onPress={onPressClose}>
                        <Icon name='close' size={22} color='white' />
                    </TouchableOpacity>
                </View>
                <View style={styles.divider}/>
                <View>
                    <Text style={styles.text}>소환사 이름</Text>
                    <TextInput style={styles.textInput} color='white' onChangeText={setName}/>

                    <Text style={styles.text}>티어</Text>
                    <View style={styles.imageContainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => onPressTier('iron')}>
                                <Image source={require('../../../image/iron.png')} style={[styles.tierImage, {tintColor: tier == 'iron' ? null : '#A0A0A0'}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onPressTier('bronze')}>
                                <Image source={require('../../../image/bronze.png')} style={[styles.tierImage, {tintColor: tier == 'bronze' ? null : '#A0A0A0'}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onPressTier('silver')}>
                                <Image source={require('../../../image/silver.png')} style={[styles.tierImage, {tintColor: tier == 'silver' ? null : '#A0A0A0'}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onPressTier('gold')}>
                                <Image source={require('../../../image/gold.png')} style={[styles.tierImage, {tintColor: tier == 'gold' ? null : '#A0A0A0'}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onPressTier('platinum')}>
                                <Image source={require('../../../image/platinum.png')} style={[styles.tierImage, {tintColor: tier == 'platinum' ? null : '#A0A0A0'}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onPressTier('diamond')}>
                                <Image source={require('../../../image/diamond.png')} style={[styles.tierImage, {tintColor: tier == 'diamond' ? null : '#A0A0A0'}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onPressTier('master')}>
                                <Image source={require('../../../image/master.png')} style={[styles.tierImage, {tintColor: tier == 'master' ? null : '#A0A0A0'}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onPressTier('grandmaster')}>
                                <Image source={require('../../../image/grandmaster.png')} style={[styles.tierImage, {tintColor: tier == 'grandmaster' ? null : '#A0A0A0'}]}/>
                            </TouchableOpacity>
                             <TouchableOpacity onPress={() => onPressTier('challenger')}>
                                <Image source={require('../../../image/challenger.png')} style={[styles.tierImage, {tintColor: tier == 'challenger' ? null : '#A0A0A0'}]}/>
                            </TouchableOpacity>
                        </ScrollView>
                        
                    </View>
                    <Text style={styles.text}>주 포지션</Text>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={() => onPressPosition('top')}>
                            <Image source={require('../../../image/top.png')} style={[styles.image, {tintColor: position == 'top' ? null : '#A0A0A0'}]}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onPressPosition('jungle')}>
                            <Image source={require('../../../image/jungle.png')} style={[styles.image, {tintColor: position == 'jungle' ? null : '#A0A0A0'}]}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onPressPosition('mid')}>
                            <Image source={require('../../../image/mid.png')} style={[styles.image, {tintColor: position == 'mid' ? null : '#A0A0A0'}]}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onPressPosition('bottom')}>
                            <Image source={require('../../../image/bottom.png')} style={[styles.image, {tintColor: position == 'bottom' ? null : '#A0A0A0'}]}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onPressPosition('support')}>
                            <Image source={require('../../../image/support.png')} style={[styles.image, {tintColor: position == 'support' ? null : '#A0A0A0'}]}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.text}>메모</Text>
                    <TextInput style={styles.textInput} color='white' onChangeText={setMemo}/>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.closeBtn} onPress={onPressClose}>
                        <Text style={styles.btnText}>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitBtn} onPress={onPressSubmit}>
                        <Text style={styles.btnText}>등록</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

        
     
        
    )
}

export default AddPlayer

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        width: '90%',
        height: 400,
        margin: 20,
        backgroundColor: '#494959',
        borderRadius: 10,
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider: {
        borderColor: '#282831',
        marginTop: 10,
        borderTopWidth: 1,
        marginLeft: -15,
        marginRight: -15
    },
    headerText: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        color: '#C0C0C0', 
        fontSize: 13,
        marginTop: 10,
        marginBottom: 10
    },
    textInput: {
        backgroundColor: '#404047',
        borderRadius: 5,
        borderWidth: 1, 
        borderColor: '#C0C0C0',
        height: 30,
        paddingLeft: 10,
        paddingRight: 10

    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    image: {
        width: WIDTH,
        height: WIDTH,
    },
    tierImage: {
        width: TIERSIZE,
        height: TIERSIZE
    },
    button: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginTop: 20
    },
    closeBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5, 
        borderWidth: 1, 
        borderColor: '#C0C0C0', 
        width: '48%',
        height: 30
    },
    submitBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5, 
        width: '48%',
        backgroundColor: '#947118',
        height: 30
    },
    btnText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }

})
