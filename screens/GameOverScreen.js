import { Alert, Button, Text, TextInput, View, Image } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { Keyboard } from 'react-native';
import Title from '../components/Title';
function GameOverScreen({ onStartNewGame, userNumber, roundsNumber }) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/favicon.png')}
                />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
                guess the number <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'red',
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        color: 'yellow',
    },
});