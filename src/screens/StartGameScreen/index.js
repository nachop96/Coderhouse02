import React from 'react';
import {Text,View,TextInput,Button} from 'react-native';
import Header from '../../components/header';
import Card from '../../components/card';
import Input from '../../components/input';

import { styles } from './styles';

const StartGameScreen = () => {

    const handleOnChange = (text) => {

        console.warn(text);

    }

    return (
        <View style={styles.container}>

        <Header title = 'Adivina el numero'></Header>
        
        <Card>
        <Text style = {styles.cardTitle}>Empezar juego</Text>

        <View style = {styles.inputContainer}>
        <Text style = {styles.label}>Elija un numero</Text>
        <Input
            blurOnSubmit
            autoCapitalization='none'
            autoCorrect={false}
            placeholder='10'
            placeholderTextColor='#d6ccc2'
            maxLength={2}
            keyboardType="numeric"
            handleOnChange={(value) => handleOnChange(value)}
         ></Input>

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