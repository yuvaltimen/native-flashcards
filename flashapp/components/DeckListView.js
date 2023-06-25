// See all decks 

import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { decks } from "../data";




export default function DeckListView({ route, navigation }) {



    const [allDeckNames, updateAllDeckNames] = useState([]);
    useEffect(() => {
        const readAllDeckNames = async () => {  
            AsyncStorage.getAllKeys().then(keys => updateAllDeckNames(keys));
        }

        readAllDeckNames();
    }, []);

    console.log(allDeckNames);

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList 
                style={styles.flatList}
                    data={allDeckNames}
                    renderItem={({item}) => 
                    <Pressable style={styles.deckButton} onPress={() => {navigation.navigate("Deck", {deckName: item})}}>
                        <Text>{item}</Text>
                    </Pressable>
                    }
                    />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    deckButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 30,
        borderRadius: 20,
        paddingVertical: 10,

    },
    flatList: {
        backgroundColor: 'blue'
    }

});