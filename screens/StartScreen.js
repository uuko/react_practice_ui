import { Alert, Button, Text, TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { Keyboard } from 'react-native';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import Title from '../components/Title';
function StartScreen({ pickNumber }) {
    const [enterNumber, setEnterNumber] = useState('')
    function numberInputHander(enterNumber) {
        setEnterNumber(enterNumber);

    }
    function confiremNumberHandler() {
        const number = parseInt(enterNumber)
        if (isNaN(number) || number <= 0 || number >= 90) {
            Alert.alert('title', 'msg', [{ text: 'ok', style: 'destructive', onPress: cancelNumberHandler }])
            return
        }
        Keyboard.dismiss();
        pickNumber(enterNumber)
    }
    function cancelNumberHandler() {
        setEnterNumber("")
        Keyboard.dismiss();
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>
                    Enter a Number
                </InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHander}
                    value={enterNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={cancelNumberHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confiremNumberHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 100
    },
    inputContainer: {
        alignItems: 'center', //預設是strech

        flexDirection: 'column',
        marginTop: 100,
        padding: 16,

        backgroundColor: '#8F4586',
        borderRadius: 24,
        marginHorizontal: 16,
        // android only
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 2 },
        shadowRadius: 6
    },
    numberInput: {
        width: 50,
        color: "#ddb52f",
        height: 50, fontSize: 32, borderBottomColor: '#ddb52f'
        , borderBottomWidth: 2,
        marginVertical: 16,
        fontWeight: 'bold',
        marginVertical: 8,

    },
    buttonsContainer: {
        flexDirection: 'row',

    },
    buttonContainer: {
        flex: 1
    }
});


export default StartScreen;