import { View, StyleSheet } from "react-native";
import FlashCard from "./FlashCard";
import { FlatList, SafeAreaView } from "react-native";


export default function CardListView(props) {

    const { data } = props;

    return (
        <SafeAreaView style={{backgroundColor: '#231942'}}>
                <FlatList 
                    data={data}
                    renderItem={({item}) => <FlashCard frontText={item.frontText} backText={item.backText}></FlashCard>}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
            );
}

const styles = StyleSheet.create({
    

})