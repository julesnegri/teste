import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
    },
    box01: {
        backgroundColor: '#3d8d0e',
        width: '6%'
    },
    box02: {
        width: '54%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: '#e16d06',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRightWidth: 1,
        borderRightColor: '#9fa09f',
    },
    space: {
        width: 130,
        paddingLeft: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    space2: {
        width: 110,
        paddingRight: 20,
    },
    title: {
        fontSize: 30,
    },
    spam: {
        fontSize: 10,
        alignContent: 'center'
    },
    spam2: {
        fontSize: 12,
        
    },
    box03: {
        width: '40%',
        height: 80,
       marginTop: -86,
       zIndex: 1,

    },
    box03Row: {
        flexDirection:'row',
        justifyContent: 'space-evenly'
    },
    box03Aten: {
        backgroundColor: '#f2f2f2',
        width: 120,
        height: 80,
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    boxAtenSpam:  {
        fontSize: 16,
    },
    box03Button: {
        backgroundColor: '#f2f2f2',
        width: 384,
        height: 60,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    }


});

export default styles;