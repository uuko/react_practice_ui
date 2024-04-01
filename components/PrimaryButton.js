import { Button, Text, TextInput, View, Pressable } from 'react-native'
import { StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress, style }) {


    return (
        <View style={[styles.buttonOuterContainer, style]}>
            <Pressable style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={onPress}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>

    )

}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'

    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddindVertical: 16,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});

export default PrimaryButton