import React from 'react';
import {Text,View,TextInput,Button} from 'react-native';
import Header from '../../components/header';
import Card from '../../components/card';

import { styles } from './styles';

const StartGameScreen = () => {
    return (
        <View style={styles.container}>

        <Header title = 'Adivina el numero'></Header>
        
        <Card>
        <Text style = {styles.cardTitle}>Empezar juego</Text>

        <View style = {styles.inputContainer}>
        <Text style = {styles.label}>Elija un numero</Text>
        <TextInput style = {styles.input}
            placeholder='11'
            placeholderTextColor='#335145'
            maxLength={2}
         ></TextInput>

        </View>
        <View style={styles.buttonsContainer}>
            <Button title ='Limpiar' onPress={() => null} color='#335145'/>
            <Button title ='Confirmar' onPress={() => null} color='#335145'/>
        </View>
        </Card>

    
        </View>



    );

    

};

export default StartGameScreen;