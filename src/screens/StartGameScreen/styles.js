import { StyleSheet } from 'react-native'

import { fontSize,colors,margin } from '../../constants/theme';

export const styles = StyleSheet.create({

    container: {
     
        flex: 1,
    },


    cardTitle: {

        fontSize: fontSize.title,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical: margin.medium,
        color: colors.primaryTitle
        


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
        color:colors.secondary,

    },
    
    label:{
        fontSize:fontSize.text,
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