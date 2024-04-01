import { View, StyleSheet, Text } from 'react-native';

import Colors from '../utils/colors';

function GuessLogItem({ roundNumber, guess }) {
    return <View style={styles.guessLogItem}>

        <Text >#{roundNumber}</Text>
        <Text >Opponent's Guess: {guess}</Text>

    </View>;
}

export default GuessLogItem;

const styles = StyleSheet.create({
    guessLogItem: {
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.yellow,
        borderRadius: 8,
        borderColor: 'red',
        borderWidth: 2,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});