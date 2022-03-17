import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    container: {
     
        flex: 1,
    },


    cardTitle: {

        fontSize: 20,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:20,
        color: 'white'
        


    },

    inputContainer: {
        flex:1,
        flexGrow: 0.6,
        marginHorizontal:20,

    },


    input:{
        height:70,
        borderBottomColor:'black',
        borderBottomWidth: 3,
        marginBottom:10,
        fontSize: 50,
        alignSelf: 'center',
        color:'#335145',

    },
    
    label:{
        fontSize:14,
        fontWeight:'bold',
        color: 'white',
        marginBottom:10,
        justifyContent:'center',
        alignSelf:'center',

    },

    buttonsContainer:{

        flex: 1,
        flexGrow: 0.18,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 25,


    },

    
    
    


});