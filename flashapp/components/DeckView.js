
import CardListView from "./CardListView";
import { decks } from "../data";


export default function DeckView({ route, navigation }) {
    const { deckName } = route.params;

    const cards = decks.find(item => item.deckName === deckName).cards;

    return (
        <CardListView data={cards}/>
    );
  }
