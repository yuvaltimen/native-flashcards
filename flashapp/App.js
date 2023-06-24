import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, FlatList } from 'react-native-web';
import CardListView from './components/CardListView';



const decks = [
  {
    id: '1',
    deckName: "Spanish_101", 
    cards: [
      {
        id: '1',
        frontText: "Hola", 
        backText: "Hello"
    },
      {
        id: '2',
        frontText: "Hola 2", 
        backText: "Hello 2"
    },
      {
        id: '3',
        frontText: "Hola 3", 
        backText: "Hello 3"
    },
    {
      id: '10',
      frontText: "kwqjef[poij", 
      backText: "wqelkn"
  },
    {
      id: '20',
      frontText: "wq'eojf[iop1j] 2", 
      backText: "wef 2"
  },
    {
      id: '30',
      frontText: "wf 3", 
      backText: "wf 3"
  },
  {
    id: '11',
    frontText: "kwqjef[poij", 
    backText: "wqelkn"
},
  {
    id: '21',
    frontText: "wq'eojf[iop1j] 2", 
    backText: "wef 2"
},
  {
    id: '3',
    frontText: "wf 3", 
    backText: "wf 3"
}
    ]
  },
  {
    id: '2',
    deckName: "Carpas", 
    cards: [
      {
        id: '1',
        frontText: "kwqjef[poij", 
        backText: "wqelkn"
    },
      {
        id: '2',
        frontText: "wq'eojf[iop1j] 2", 
        backText: "wef 2"
    },
      {
        id: '3',
        frontText: "wf 3", 
        backText: "wf 3"
    }
    ]
  }
]


for (const deck in deck) {
  const result = await AsyncStorage.setItem(deck.deckName, JSON.stringify(deck.cards));
  console.log(result);

}

function DetailsScreen({ route, navigation }) {
  const { deckName } = route.params;
  // const cards = AsyncStorage.getItem(deckName).then(val => JSON.parse(val));

  const cards = decks[0].cards;
  return (
    <SafeAreaView>
      <CardListView data={cards}/>
    </SafeAreaView>
  );
}


// TODO: Rename to deck list view
function HomeScreen({ navigation }) {

  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={decks}
        renderItem={({ item }) => <Button title={"Go to ".concat(item.deckName)} onPress={() => navigation.navigate('Deck', {deckName: item.deckName})}/>}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Decks' }}/>
        <Stack.Screen name="Deck" component={DetailsScreen} options={{ title: 'Deck View' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



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

export default App;