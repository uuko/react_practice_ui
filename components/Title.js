import { Button, Text, TextInput, View, Pressable } from 'react-native'
import { StyleSheet } from 'react-native';
import Colors from '../utils/colors';

function Title({ children, onPress }) {


    return (
        <Text style={styles.title}>{children}</Text>

    )

}

const styles = StyleSheet.create({

    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 24,
        borderColor: Colors.yellow,
        color: Colors.yellow,
        borderWidth: 2,
        textAlign: 'center',
        padding: 12
    },

});

export default Title