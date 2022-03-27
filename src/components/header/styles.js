import { StyleSheet,Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({

    container: {
        height: height *0.1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#335145',
        


    },

    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#BEEF9E',
        fontFamily: 'Montserrat-Bold'


    },




});