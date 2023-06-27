// CRUD cards in a deck

import { cloneElement, useState } from "react";
import { View, Text, Pressable, TextInput, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardListView from "./CardListView";

export default function DeckEditorView({ route, navigation }) {

    const [frontText, updateFrontText] = useState('front text');
    const [backText, updateBackText] = useState('back text');

    return (
        <SafeAreaView style={styles.background}>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>+ Create Card</Text>
            </Pressable>
            <TextInput 
                style={styles.textInput}
                onChangeText={(txt) => updateFrontText(txt)}
                value={frontText}>
            </TextInput>
            <TextInput
                style={styles.textInput}
                onChangeText={(txt) => updateBackText(txt)}
                value={backText}>
            </TextInput>

            {/* <CardListView 
                style={styles.cardListView}
                data={}
            /> */}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'purple',
        marginVertical: 20,
        borderRadius: 20,
        height: 120,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 50,
        color: 'blue'
    },
    textInput: {
        height: 100,
        width: 280,
        fontSize: 42,
        color: 'black',
        marginVertical: 10,
        backgroundColor: 'green'
    },
    cardListView: {
        backgroundColor: 'red',
        flex: 1,
    },  
})