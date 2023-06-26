// See all decks 

import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, Text, FlatList, SafeAreaView, StyleSheet, View } from "react-native";
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
        
            <SafeAreaView style={styles.areaView}>
                <View style={styles.areaView}>
                    <Pressable 
                        style={({ pressed }) => [styles.newDeckButton || {}, {opacity:pressed ? 0.5 : 1}]}
                        onPress={() => navigation.push('DeckCreate')}>
                        <Text style={styles.newDeckButtonText}>
                            +
                        </Text>
                    </Pressable>
                    <FlatList 
                        style={styles.flatList}
                        data={allDeckNames}
                        renderItem={({item}) => {
                        return (
                        <Pressable 
                            style={({ pressed }) => [styles.deckButton || {}, {opacity:pressed ? 0.5 : 1}]}
                            onPress={() => {navigation.navigate("DeckView", {deckName: item})}}>
                            <Text style={styles.deckButtonText}>
                                {item}
                            </Text>
                        </Pressable>
                            )
                        }}/>
                </View>
            </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    areaView: {
        backgroundColor: '#231942',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

    },
    deckButton: {
        backgroundColor: '#5E548E',
        height: 100,
        width: 300,
        marginVertical: 5,
        marginHorizontal: 30,
        borderRadius: 20,
        paddingVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    newDeckButton: {
        backgroundColor: '#BE95C4',
        height: 100,
        width: 300,
        marginVertical: 5,
        marginHorizontal: 30,
        borderRadius: 20,
        paddingVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    newDeckButtonText: {
        fontSize: 64,
        color: '#5E548E'
    },
    
    deckButtonText: {
        fontSize: 32,
        color: '#E0B1CB'
    },
    flatList: {
        backgroundColor: '#231942',
    }

});