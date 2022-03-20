import React, {useState} from 'react';
import {Text,View,TextInput,Button,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from '../../components/header';
import Card from '../../components/card';
import Input from '../../components/input';

import { styles } from './styles';



const StartGameScreen = () => {

    
    const [inputValue, setInputValue] = useState('');
    const [selectedNumber, setselectedNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const handleOnChange = (text) => {

        setInputValue(text.replace(/[^0-9]/g,''));

    }

    const handleOnClear = () => {
        setInputValue('');
        setConfirmed(false);


    }


    const handleConfirmInput = () => {
        const choseNumber = parseInt(inputValue);

        if (choseNumber <= 0 || choseNumber > 99) {

            alert('El numero debe estar entre 1 y 99')
            
           
        }

        if (isNaN(choseNumber)) {

            alert('Falta ingresar el número')
            
            return; 
        }

        setConfirmed(true);
        setselectedNumber(choseNumber);
        setInputValue('');
        


    }

    return (

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

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
            placeholder='Ej: 10'
            placeholderTextColor='#d6ccc2'
            maxLength={2}
            keyboardType="numeric"
            handleOnChange={(value) => handleOnChange(value)}
            value = {inputValue}
         ></Input>

        </View>
        <View style={styles.buttonsContainer}>
            <Button title ='Limpiar' onPress={() => handleOnClear()} color='#335145'/>
            <Button title ='Confirmar' onPress={() => handleConfirmInput()} color='#335145'/>
        </View>
        </Card>

    
        </View>

        </TouchableWithoutFeedback>


    );

    

};

export default StartGameScreen;