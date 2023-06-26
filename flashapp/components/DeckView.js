
import { StyleSheet, View, Text, Pressable} from "react-native";
import CardListView from "./CardListView";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { decks } from "../data";
import { useEffect, useState } from "react";


export default function DeckView({ route, navigation }) {
    const { deckName } = route.params;

    const [cards, updateCards] = useState([]);

    useEffect(() => {
        const readCardsForDeck = async () => {
            const data = await AsyncStorage.getItem(deckName);
            const jsonData = await JSON.parse(data);
            updateCards(jsonData);
        }
        readCardsForDeck();
    }, []);

    return (
        <View style={styles.areaView}>
            <Pressable 
            style={({ pressed }) => [styles.testModeButton || {}, {opacity:pressed ? 0.5 : 1}]}
            onPress={() => navigation.push("TestView", {deckName: deckName})}>
                <Text style={styles.testModeButtonText}>
                    Test Mode!
                </Text>
            </Pressable>
            <CardListView data={cards}/>
        </View>
    );
  }

const styles = StyleSheet.create({
    deckView: {
        backgroundColor: '#6e6d6d'
    },
    background: {
        backgroundColor: '#231942',
    },
    areaView: {
        backgroundColor: '#231942',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70,
    },
    testModeButton: {
        marginTop: 70,
        backgroundColor: '#BE95C4',
        height: 50,
        width: 300,
        marginVertical: 5,
        marginHorizontal: 30,
        borderRadius: 20,
        paddingVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    testModeButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5E548E'
    }
})