
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Dimensions, TextInput, Pressable, KeyboardAvoidingView, Keyboard, ScrollView} from 'react-native';
import { useEffect } from 'react';


const {height, width} = Dimensions.get('window');

export default function DeckCreate({ route, navigation }) {

    const createNewDeck = async (deckName) => {
        console.log(deckName);
        const cleanedDeckName = deckName.trim();
        if (cleanedDeckName !== '') {
            await AsyncStorage.setItem(cleanedDeckName, JSON.stringify([]));
            navigation.navigate("DeckListView");
        } else {
            alert("Deck name can't be empty!")
        }
    }

    const [newDeckName, updateNewDeckName] = useState('');


    return (
        <KeyboardAvoidingView
            style={styles.deckCreateView}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
            contentContainerStyle={styles.deckCreateView}
            onScroll={() => Keyboard.dismiss()}>
            <Text style={styles.deckCreateTextHeader}>
                Create a new deck:
            </Text>
                <TextInput
                    style={styles.deckNameInput}
                    autoFocus={true}
                    onChangeText={txt => updateNewDeckName(txt)}>
                    {newDeckName}
                </TextInput>
            <Pressable 
                style={({ pressed }) => [styles.createDeckButton || {}, {opacity:pressed ? 0.5 : 1}]}
                onPress={() => {
                    createNewDeck(newDeckName);
                }}>
                <Text style={styles.createDeckButtonText}>
                    Create
                </Text>
            </Pressable>

        </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    deckCreateView: {
        backgroundColor: '#231942',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-evenly'
    },
    deckCreateTextHeader: {
        backgroundColor: '#231942',
        color: '#E0B1CB',
        fontWeight: 500,
        fontSize: 42,
        textAlign: 'center',
    },
    deckNameInput: {
        backgroundColor: '#BE95C4',
        height: 100,
        width: width * 0.85,
        borderRadius: 20,
        color: '#5E548E',
        fontWeight: 'bold',
        fontSize: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createDeckButton: {
        backgroundColor: '#BE95C4',
        height: 100,
        width: 300,
        marginVertical: 5,
        marginHorizontal: 30,
        borderRadius: 20,
        paddingVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    createDeckButtonText: {
        fontWeight: 500,
        textAlign: 'center',
        fontSize: 64,
        color: '#5E548E'
    }
})