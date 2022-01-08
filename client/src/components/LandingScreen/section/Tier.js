import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { Menu, MenuItem } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/AntDesign';

const Tier = (props) => {

    const hideMenu = () => props.changeVisible(false);
    const showMenu = () => props.changeVisible(false);

    const renderTierToKorean = (tier) => {
        switch(tier){
            case '':
                return '전체'
            case 'iron':
                return '아이언'
            case 'bronze':
                return '브론즈'
            case 'silver':
                return '실버'
            case 'gold':
                return '골드'
            case 'platinum':
                return '플레티넘' 
           case 'diamond':
                return '다이아몬드'
            case 'master':
                return '마스터'
            case 'grandmaster':
                return '그랜드마스터'
            case 'challenger':
                return '챌린저'
            
        }
    }
    return (
        <View style={styles.tierDropdown}>
            <Menu
                visible={props.visible}
                anchor={
                    <TouchableOpacity style={styles.tierBtn} onPress={() => props.changeVisible(true)}>
                        <Text style={styles.tierText}>{renderTierToKorean(props.tier)}</Text>
                        <Icon name='caretdown' size={15} color='white' />
                    </TouchableOpacity>
                }
                onRequestClose={hideMenu}
                style={styles.menu}
            >
                <MenuItem onPress={() => {props.changeTier(''); hideMenu()} } textStyle={styles.menuText}>전체</MenuItem>
                <MenuItem onPress={() => {props.changeTier('iron'); hideMenu()} } textStyle={styles.menuText}>아이언</MenuItem>
                <MenuItem onPress={() => {props.changeTier('bronze'); hideMenu()}} textStyle={styles.menuText}>브론즈</MenuItem>
                <MenuItem onPress={() => {props.changeTier('silver'); hideMenu()}} textStyle={styles.menuText}>실버</MenuItem>
                <MenuItem onPress={() => {props.changeTier('gold'); hideMenu()}} textStyle={styles.menuText}>골드</MenuItem>
                <MenuItem onPress={() => {props.changeTier('platinum'); hideMenu()}} textStyle={styles.menuText}>플래티넘</MenuItem>
                <MenuItem onPress={() => {props.changeTier('diamond'); hideMenu()}} textStyle={styles.menuText}>다이아몬드</MenuItem>
                <MenuItem onPress={() => {props.changeTier('master'); hideMenu()}} textStyle={styles.menuText}>마스터</MenuItem>
                <MenuItem onPress={() => {props.changeTier('grandmaster'); hideMenu()}} textStyle={styles.menuText}>그랜드마스터</MenuItem>
                <MenuItem onPress={() => {props.changeTier('challenger'); hideMenu()}} textStyle={styles.menuText}>챌린저</MenuItem>
            </Menu>
        </View>   
    )
}

export default Tier

const styles = StyleSheet.create({
    tierDropdown: {
        width: '34%',
    },
    tierBtn: {
        backgroundColor: '#947118',
        width: '100%',
        height: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    tierText: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    menu: {
        backgroundColor: '#947118'
    },
    menuText:{
        fontSize: 15, 
        fontWeight: 'bold', 
        color: 'white'
    }
})
