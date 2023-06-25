import { View } from "react-native";
import FlashCard from "./FlashCard";
import { FlatList, SafeAreaView } from "react-native";



export default function CardListView(props) {

    const { data } = props;

    return (
        <SafeAreaView>
                <FlatList 
                    data={data}
                    renderItem={({item}) => <FlashCard frontText={item.frontText} backText={item.backText}></FlashCard>}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
            );
}