import { StyleSheet,Dimensions } from 'react-native'

import { fontSize, colors, margin } from '../../constants/theme';


const {width,height} = Dimensions.get('screen');

export const styles = StyleSheet.create({

    container: {

        flex: 1,
    },


    cardTitle: {

        fontSize: fontSize.title,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: margin.medium,
        color: colors.primaryTitle



    },

    inputContainer: {
        
        marginHorizontal: 20,


    },

    label: {
        fontSize: fontSize.text,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        justifyContent: 'center',
        alignSelf: 'center',

    },

    buttonsContainer: {

        height: height * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 25,


    },

    confirmedText: {

        fontSize: fontSize.button,
        fontWeight: 'bold',
        color: colors.secondary,
        justifyContent: 'center',
        alignSelf: 'center'


    },

    containerConfirmed: {
        height: height / 3.5,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginHorizontal: 60,
        paddingHorizontal: 50,




    }





});