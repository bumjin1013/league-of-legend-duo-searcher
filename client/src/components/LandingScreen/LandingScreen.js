import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { StyleSheet, Image, Text, View, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'

import { Dimensions } from 'react-native';
import AddPlayer from './section/AddPlayer';
import Match from './section/Match';
import Tier from './section/Tier';
const WIDTH = Dimensions.get('window').height / 15; 

const LandingScreen = () => {

    const dispatch = useDispatch();

    const [match, setMatch] = useState([]);
    const [tier, setTier] = useState('');
    const [position, setPosition] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [tierVisible, setTierVisible] = useState(false);

    const onPressPosition = (e) => {
        position === e ? setPosition('') : setPosition(e)
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={() => onPressPosition('top')}>
                    <Image source={require('../../image/top.png')} style={[styles.image, {tintColor: position == 'top' ? null : '#A0A0A0'}]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressPosition('jungle')}>
                    <Image source={require('../../image/jungle.png')} style={[styles.image, {tintColor: position == 'jungle' ? null : '#A0A0A0'}]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressPosition('mid')}>
                    <Image source={require('../../image/mid.png')} style={[styles.image, {tintColor: position == 'mid' ? null : '#A0A0A0'}]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressPosition('bottom')}>
                    <Image source={require('../../image/bottom.png')} style={[styles.image, {tintColor: position == 'bottom' ? null : '#A0A0A0'}]}/>
                </TouchableOpacity>
                 <TouchableOpacity onPress={() => onPressPosition('support')}>
                    <Image source={require('../../image/support.png')} style={[styles.image, {tintColor: position == 'support' ? null : '#A0A0A0'}]}/>
                </TouchableOpacity>
            </View>
            <View style={styles.ButtonContainer}>  
                <Tier visible={tierVisible} changeVisible={setTierVisible} changeTier={setTier} tier={tier}/>
                <TouchableOpacity style={styles.addPlayerBtn} onPress={() => setModalVisible(true)}>
                    <Text style={styles.playerText}>소환사 등록하기</Text>
                    <AddPlayer visible={modalVisible} changeVisible={setModalVisible}/>
                </TouchableOpacity>
            </View>
            <View style={styles.contents}>
                <ScrollView style={styles.scroll}>
                    <Match position={position} tier={tier}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default LandingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282831'
    },
    ButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
    },
    contents: {
        flex: 8
    },
    textInput: {
        borderWidth: 1,
        width: '80%',
        height: 30,
        marginRight: 15,
        borderRadius: 15,
        paddingLeft: 15
    },
    image: {
        width: WIDTH,
        height: WIDTH,
    },
    imageContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    addPlayerBtn: {
        backgroundColor: '#404040',
        width: '40%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    playerText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    scroll: {
        backgroundColor: '#404047',
        marginTop: -5
    },
    item: {
        margin: 10,
        backgroundColor: '#494959'
    }

})
