import React, { useState,useRef,useEffect} from 'react';
import { View, Text, Button,Alert } from 'react-native';
import { styles } from './style';
import Card from '../../components/card';
import Header from '../../components/header';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {

        return generateRandomBetween(min, max, exclude)


    }
    else return rndNum;

}

const GameScreen = ({ userOptions,onGameOver }) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOptions))
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    useEffect(() => {
        if (currentGuess === userOptions) onGameOver(rounds)
    }, [currentGuess, userOptions, onGameOver])


    const handlerNextGuess = (direction) => {
            
        if ((direction === 'lower' && currentGuess < userOptions) || 
            (direction === 'greater' && currentGuess > userOptions)) {
                Alert.alert('No mientas!!', 'Tu sabes que no es verdad...!', [
                    { text: 'Disculpas!', style: 'Cancelar' }
                ])
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(current => current + 1)
       
    }

    

    return (

        <View style={styles.container}>
            <Header title='Adivina el numero'></Header>
            <Card style={styles.cardConteiner}>
                <Text style={styles.confirmedTitle}>La suposición del oponente</Text>
                <Text style={styles.confirmedText}>{currentGuess}</Text>

                <View style={styles.buttonsContainer}>


                    <Button title='MAYOR' onPress={() => handlerNextGuess('greater')} color='#335145' />
                    <Button title='MENOR' onPress={() => handlerNextGuess('lower')} color='#335145' />

                </View>
            </Card>

        </View>


    )


}

export default GameScreen;