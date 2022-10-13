import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '54%'
    },
    titleCategoria: {
        paddingTop: 30,
        paddingLeft: 24,
        paddingBottom: 10,
        color: '#141414',
        fontSize: 18,
    },
    containerImg: {
        flexDirection:'row',
        flexWrap: "wrap",

        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
    },
    cardImg: {
        width: 100,
        height: 80,
        margin: 4,
        borderRadius: 5,
    }
});

export default styles;