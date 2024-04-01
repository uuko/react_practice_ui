import { Alert, Button, FlatList, Platform, Text, TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import GuessLogItem from '../components/GuessLogItem';
import { Dimensions ,useWindowDimensions} from 'react-native';
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    console.log(" min " + min + " maxBoundary " + max + " max "
        + "exclude " + exclude + ' r nd ' + rndNum)
    if (rndNum == exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
function generateInitRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum == exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
// let minBoundary = 1;
// let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const [minBoundary, setMinBoundary] = useState(1);
    const [maxBoundary, setMaxBoundary] = useState(100);
    const initialGuess = generateInitRandomBetween(minBoundary, maxBoundary, userNumber);
    // const initialGuess = generateRandomBetween(1, 100, userNumber);

    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [shouldGenerate, setShouldGenerate] = useState(false);
    const [guessRounds, setGuessRounds] = useState([initialGuess])


    useEffect(() => {
        if (currentGuess == userNumber) {
            setShouldGenerate(false)
            setMinBoundary(0)
            setMaxBoundary(100)
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);
    useEffect(() => {
        if (shouldGenerate) {
            const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
            setCurrentGuess(newRndNumber);
            setGuessRounds([...guessRounds, newRndNumber])
        }
    }, [minBoundary, maxBoundary, shouldGenerate]);

    console.log(" minBoundary " + minBoundary + " maxBoundary " + maxBoundary + " currentGuess " + currentGuess
        + "userNumber " + userNumber)

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }


        if (direction == 'greater') {
            setMinBoundary(currentGuess);
        } else {
            setMaxBoundary(currentGuess);
        }
        // if (direction === 'lower') {
        //     maxBoundary = currentGuess;
        // } else {
        //     minBoundary = currentGuess + 1;
        // }
        console.log(direction === 'greater' + 'curr ' + currentGuess + ' min ' + minBoundary)
        // const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        // setCurrentGuess(newRndNumber);

        setShouldGenerate(true)

    }

    const { width, height } = useWindowDimensions();
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or lower?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            -
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            +
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <FlatList data={guessRounds} renderItem={(itemData) => (
                <GuessLogItem guess={itemData.item} roundNumber={itemData.index} ></GuessLogItem>
            )} keyExtractor={(item) => item} />
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    instructionText: {
        marginBottom: Platform.select({android:20,ios:10}),
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});

export default GameScreen;