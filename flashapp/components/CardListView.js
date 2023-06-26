import { View, StyleSheet } from "react-native";
import FlashCard from "./FlashCard";
import { FlatList, SafeAreaView } from "react-native";


export default function CardListView(props) {

    const { data } = props;

    return (
        <SafeAreaView style={styles.areaView}>
                <FlatList 
                    data={data}
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
        marginBottom: 30,
    },
})