import { useEffect} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeckListView from './components/DeckListView';
import DeckView from './components/DeckView';
import TestView from './components/TestView';
import DeckCreate from './components/DeckCreate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { decks } from './data';



const Stack = createNativeStackNavigator();


export default function App() {

  
  const allData = [];
  for (const deck of decks) {
    allData.push([deck.deckName, JSON.stringify(deck.cards)]);
  }

  // Default data 
  useEffect(() => {
    const clearAllKeys = async () => {
      const allSetKeys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(allSetKeys);
    }
    const setDeckData = async () => {
      await AsyncStorage.multiSet(allData);
    }
    clearAllKeys();
    setDeckData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DeckListView">
        <Stack.Screen name="DeckListView" component={DeckListView} options={{ title: 'Deck List View', ...styles.header }}/>
        <Stack.Screen name="DeckView" component={DeckView} options={{ title: 'Card List View', ...styles.header }}/>
        <Stack.Screen name="DeckCreate" component={DeckCreate} options={{ title: 'Card List View', ...styles.header }}/>
        <Stack.Screen name="TestView" component={TestView} options={{ title: 'Test Mode', ...styles.header }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  header: {
    headerStyle: {
      backgroundColor: '#1e1f1e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
});