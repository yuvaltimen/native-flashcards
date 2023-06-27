import { View, StyleSheet } from "react-native";
import FlashCard from "./FlashCard";
import { FlatList, SafeAreaView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";


export default function TestView({route, navigation}) {

    const { deckName } = route.params

    const [cards, updateCards] = useState([]);
    useEffect(() => {
        const readCards = async () => {
            const cardData = await AsyncStorage.getItem(deckName);
            updateCards(JSON.parse(cardData));
        }
        readCards();
    }, [])

    console.log(cards);

    const shuffleDeck = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      };

    return (
            <SafeAreaView style={styles.areaView}>
                    <FlatList 
                        data={shuffleDeck(cards)}
                        renderItem={({item}) => <FlashCard frontText={item.frontText} backText={item.backText}></FlashCard>}
                        keyExtractor={item => item.id}
                    />
            </SafeAreaView>
            );
}

const styles = StyleSheet.create({
    
    areaView: {
        backgroundColor: '#231942',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})