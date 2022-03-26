import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../../components/header';
import Card from '../../components/card';
import Input from '../../components/input';

import { styles } from './styles';
import splitLayoutProps from 'react-native/Libraries/StyleSheet/splitLayoutProps';

const isIOS = Platform.OS === 'ios';

const StartGameScreen = ({ onStartGame }) => {


    const [inputValue, setInputValue] = useState('');
    const [selectedNumber, setselectedNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const handleOnChange = (text) => {

        setInputValue(text.replace(/[^0-9]/g, ''));

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

    const confirmedOutput = confirmed ? (

        <Card style={styles.containerConfirmed}>
            <Text style={styles.cardTitle}>Tu Selección</Text>
            <Text style={styles.confirmedText}>{selectedNumber}</Text>
            <Button title='Empezar Juego' onPress={() => onStartGame(selectedNumber)} color='#335145' />
        </Card>)
        : null;

    return (

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <KeyboardAvoidingView
                behavior={isIOS ? 'padding' : 'height'}
                style={styles.container}
            >

                <View style={styles.container}>

                    <Header title='Adivina el numero'></Header>

                    <Card>
                        <Text style={styles.cardTitle}>Empezar juego</Text>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Elija un numero</Text>
                            <Input
                                blurOnSubmit
                                autoCapitalization='none'
                                autoCorrect={false}
                                placeholder='Ej: 10'
                                placeholderTextColor='#d6ccc2'
                                maxLength={2}
                                keyboardType="numeric"
                                handleOnChange={(value) => handleOnChange(value)}
                                value={inputValue}
                            ></Input>

                        </View>
                        <View style={styles.buttonsContainer}>
                            <Button title='Limpiar' onPress={() => handleOnClear()} color='#335145' />
                            <Button title='Confirmar' onPress={() => handleConfirmInput()} color='#335145' />
                        </View>
                    </Card>

                    {confirmedOutput}

                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>


    );



};

export default StartGameScreen;