
import { StyleSheet } from "react-native";
import CardListView from "./CardListView";
import { decks } from "../data";


export default function DeckView({ route, navigation }) {
    const { deckName } = route.params;

    const cards = decks.find(item => item.deckName === deckName).cards;

    return (
        <CardListView style={styles.deckView} data={cards}/>
    );
  }

const styles = StyleSheet.create({
    deckView: {
        backgroundColor: '#6e6d6d'
        
    }
})