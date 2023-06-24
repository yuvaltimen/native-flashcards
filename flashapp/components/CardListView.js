import { View } from "react-native";
import FlashCard from "./FlashCard";
import { FlatList } from "react-native-web";



export default function CardListView(props) {

    const {data} = props;

    return (<View>
                <FlatList 
                    data={data}
                    renderItem={({item}) => <FlashCard frontText={item.frontText} backText={item.backText}></FlashCard>}
                    keyExtractor={item => item.id}
                />
            </View>);
}