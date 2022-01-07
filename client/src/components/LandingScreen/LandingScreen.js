import React, { useState } from 'react'
import { StyleSheet, Image, Text, View, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { Dimensions } from 'react-native';
import AddPlayer from './section/AddPlayer';

const WIDTH = Dimensions.get('window').height / 15; 
const LandingScreen = () => {

    const [position, setPosition] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
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
                <TouchableOpacity style={styles.tierBtn}>
                    <Text style={styles.tierText}>티어</Text>
                    <Icon name='caretdown' size={20} color='white' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addPlayerBtn} onPress={() => setModalVisible(true)}>
                    <Text style={styles.playerText}>소환사 등록하기</Text>
                    <AddPlayer visible={modalVisible} changeVisible={setModalVisible}/>
                </TouchableOpacity>
            </View>
            <View style={styles.contents}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.item}>
                        <Text> 1 </Text>
                    </View>
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
        marginRight: 15
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
    tierBtn: {
        backgroundColor: '#947118',
        width: '30%',
        height: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    addPlayerBtn: {
        backgroundColor: '#404040',
        width: '40%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    playerText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    tierText: {
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
