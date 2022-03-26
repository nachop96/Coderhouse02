import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
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

const GameScreen = ({ userOptions }) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOptions))


    return (

        <View style={styles.container}>
            <Header title='Adivina el numero'></Header>
            <Card>
                <Text style={styles.confirmedTitle}>La suposición del oponente</Text>
                <Text style={styles.confirmedText}>{currentGuess}</Text>

                <View style={styles.buttonsContainer}>


                    <Button title='MAYOR' onPress={() => null} color='#335145' />
                    <Button title='MENOR' onPress={() => null} color='#335145' />

                </View>
            </Card>

        </View>


    )


}

export default GameScreen;