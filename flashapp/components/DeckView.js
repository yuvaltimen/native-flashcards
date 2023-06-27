
import { StyleSheet, View, Text, Pressable, Dimensions} from "react-native";
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
        <View style={styles.background}>
            <CardListView style={styles.cardListView} data={cards}/>
        </View>
    );
  }


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#231942',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardListView: {
        backgroundColor: 'red',
        flex: 1,
    },  
})