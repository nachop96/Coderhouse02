
import React from 'react';
import{
  Text,
  View,
} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';

import { styles } from './styles'
const App = () => {


  return (
  
    
    <View style={styles.container}>
        
         
         <StartGameScreen />
         </View>
  );
};



export default App;