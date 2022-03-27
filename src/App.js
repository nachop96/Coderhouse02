
import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,

} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


import { styles } from './styles'
const App = () => {

  

  const [userNumber, setUserNumber] = useState('');
  const [guessRounds, setGuessRounds] = useState(0);
  const handleStartGame = (selectedNumber) => {

    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const handleGameOver = rounds => {

    setGuessRounds(rounds);


  }

  const handleRestart = () => {
      
      setUserNumber(null);
      setGuessRounds(0);
  


  }

  let content = <StartGameScreen onStartGame={handleStartGame} />

  if (userNumber && guessRounds <= 0) {

    content = <GameScreen userOptions={userNumber} onGameOver={handleGameOver} />

  } else if (guessRounds > 0) {

    content = <GameOverScreen rounds={guessRounds} choice={userNumber} onRestart={handleRestart} />


  }


  return (


    <SafeAreaView style={styles.container}>




      {content}

    </SafeAreaView>
  );
};



export default App;
