import React from 'react'
import {View,Image,Text,Button} from 'react-native'
import Card from '../../components/card';

import Header from '../../components/header';
import { styles } from './style';

const GameOverScreen = (props) => {

    const { rounds, choice, onRestart } = props;

return(

    
    <View style={styles.container}>
        
        <Image style={styles.image} source={require('../../../assets/images/gameover.png')}/>
        <Card style={styles.cardContainer}>
            <Text style={styles.text}> Intentos: {rounds}</Text>
        
            <Text style={styles.text}>Numero Secreto: {choice}</Text>
            <View styles={styles.buttonContainer}>
            <Button title="Nuevo Juego" onPress={onRestart} color='#335145'/>
            </View>

        </Card>

    </View>


)


}


export default GameOverScreen