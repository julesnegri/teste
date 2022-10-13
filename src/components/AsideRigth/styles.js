import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '40%',
        borderLeftWidth: 1,
        borderLeftColor: '#9fa09f',
        paddingTop: 30
    },
   
    listItem: {
        
        flexDirection:'row',
        paddingTop: 6,
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#9fa09f',
        marginLeft: 10,
        marginRight: 10,
        
    },
    imgProdList: {
        width: 30,
        height: 45,
        
        borderRadius: 3,  
    },
    add: {

        width: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    boxDescProdList: {
        
        width: 150,
        flexDirection: 'column',
        alignContent: 'center',
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    titleProdList: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    valuesProdList: {
       flexDirection: 'row',
       justifyContent: 'space-between',
    },
    edit: {
        
        width: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

});

export default styles;