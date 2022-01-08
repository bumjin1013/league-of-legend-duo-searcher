import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import axios from 'axios';
import { Dimensions } from 'react-native';
import moment from 'moment';
import 'moment/locale/ko'; 
import 'moment-timezone';

const WIDTH = Dimensions.get('window').height / 23; 

const Match = (props) => {

    const [match, setMatch] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/matches/match')
        .then(response => {
            setMatch(response.data.doc);
            setFilter(match);
        })
    }, [])

    const renderPosition = (position) => {
        switch(position){
            case 'top':
                return <Image style={styles.position} source={require('../../../image/top.png')}/>
            case 'jungle':
                return <Image style={styles.position} source={require('../../../image/jungle.png')}/>
            case 'mid':
                return <Image style={styles.position} source={require('../../../image/mid.png')}/>
            case 'bottom':
                return <Image style={styles.position} source={require('../../../image/bottom.png')}/>
            case 'support':
                return <Image style={styles.position} source={require('../../../image/support.png')}/>
        }
    }

    const renderTier = (tier) => {
        switch(tier){
            case 'iron':
                return <Image style={styles.position} source={require('../../../image/iron.png')}/>
            case 'bronze':
                return <Image style={styles.position} source={require('../../../image/bronze.png')}/>
            case 'silver':
                return <Image style={styles.position} source={require('../../../image/silver.png')}/>
            case 'gold':
                return <Image style={styles.position} source={require('../../../image/gold.png')}/>
            case 'platinum':
                return <Image style={styles.position} source={require('../../../image/platinum.png')}/>
            case 'diamond':
                return <Image style={styles.position} source={require('../../../image/diamond.png')}/>
            case 'master':
                return <Image style={styles.position} source={require('../../../image/master.png')}/>
            case 'grandmaster':
                return <Image style={styles.position} source={require('../../../image/grandmaster.png')}/>
            case 'challenger':
                return <Image style={styles.position} source={require('../../../image/challenger.png')}/>
                
        }
    }

    console.log(moment.tz.setDefault("Asia/Seoul")   )
    const filterMatch = (position, tier) => {
        if(position === '' && tier === ''){
            return match;
        } else if(position !== '' && tier === ''){
            return match.filter((item) =>  item.position === position);
        } else if(position === '' && tier !== ''){
            return match.filter((item) =>  item.tier === tier);
        } else {
            return match.filter((item) => item.position === position && item.tier === tier)
        }
        
    }

    const renderMatch = filterMatch(props.position, props.tier) && filterMatch(props.position, props.tier).map((item) => {

        console.log(item.createdAt);
        return (
            <View style={styles.container} index={item._id}>
                <View style={styles.info}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <View style={styles.infoImage}>
                        {renderTier(item.tier)}
                        {renderPosition(item.position)}
                    </View>
                    
                </View>
                <View style={styles.memoContainer}>
                    <Text style={styles.memoText}>{item.memo}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{moment(Date(), item.created).fromNow()}</Text>
                </View>
            </View>
        )
    })

    return (
       renderMatch
    )
}

export default Match

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#494959',
        height: 110,
        borderRadius: 10,
        borderColor: '#A0A0A0',
        borderWidth: 1,
        marginBottom: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        
    },
    nameText: {
        color: 'white',
        fontSize: 18,
        margin: 15
    },
    position:{
        width: WIDTH,
        height: WIDTH
    },
    info:{ 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    memoContainer: {
        backgroundColor: '#404048',
        margin: 10,
        height: 30,
        marginTop: 5,
        borderRadius: 5,
        justifyContent: 'center',
        borderColor: '#A0A0A0',
        borderWidth: 1
    },
    infoImage: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    memoText: {
        color: 'white',
        fontSize: 15,
        paddingLeft: 10,
    },
    timeText: {
        color: '#A0A0A0',
        fontSize: 12
        
    },
    timeContainer: {
        alignItems: 'flex-end',
        marginRight: 12,
        marginTop: -7
    }
})
