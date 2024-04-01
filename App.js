import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import GameScreen from './screens/GameScreen'
import { SafeAreaView } from 'react-native';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {
  const [pickNumber, setPickNumber] = useState()
  const [gameOver, setGameOver] = useState(false)
  const [guessRounds, setGuessRounds] = useState(0);

  function pickNumberHandler(pickNumber) {
    setPickNumber(pickNumber)
  }
  function gameOverHandler(length) {
    setGameOver(true)
    setGuessRounds(length)
  }

  function startNewGameHandler() {
    setGameOver(false)
    setPickNumber(null)
    setGuessRounds(0)
  }
  var screens = <StartScreen pickNumber={pickNumberHandler}></StartScreen>
  console.log('gameover ' + gameOver + 'pickNumber ' + pickNumber)
  if (pickNumber && !gameOver) {

    screens = <GameScreen userNumber={pickNumber} onGameOver={gameOverHandler}></GameScreen>
  }
  else if (gameOver) {
    screens = <GameOverScreen onStartNewGame={startNewGameHandler} userNumber={pickNumber} roundsNumber={guessRounds} ></GameOverScreen>
  }


  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      {/* <ImageBackground source={require('./assets/icon.png')}
        imageStyle={styles.bgImg} resizeMode='cover'>
      

      </ImageBackground> */}
      <SafeAreaView style={styles.rootScreen}>
        {screens}
      </SafeAreaView>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  bgImg: {
    opacity: 0.15
  }
});
