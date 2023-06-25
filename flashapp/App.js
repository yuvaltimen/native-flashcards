import { useEffect} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeckListView from './components/DeckListView';
import DeckView from './components/DeckView';
import TestView from './components/TestView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { decks } from './data';



const Stack = createNativeStackNavigator();


export default function App() {
  
  useEffect(() => {
    const setDeckData = async () => {
      await AsyncStorage.multiSet([[decks[0].deckName, JSON.stringify(decks[0].cards)], [decks[1].deckName, JSON.stringify(decks[1].cards)]])
    }
    setDeckData();

}, []);


        

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={DeckListView} options={{ title: 'Deck List View' }}/>
        <Stack.Screen name="Deck" component={DeckView} options={{ title: 'Card List View' }}/>
        <Stack.Screen name="Test" component={TestView} options={{ title: 'Test Mode'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  }
});