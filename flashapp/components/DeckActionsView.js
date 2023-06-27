import { Text, View, Pressable, StyleSheet} from "react-native";


export default function DeckActionsView({route, navigation}) {

    const { deckName } = route.params;

    return (
        <View style={styles.background}>
            <Text style={styles.deckName}>
                {deckName}
            </Text>
            <Pressable 
            style={({ pressed }) => [styles.testModeButton || {}, {opacity:pressed ? 0.5 : 1}]}
            onPress={() => navigation.push("DeckView", {deckName: deckName})}>
                <Text style={styles.testModeButtonText}>
                    View the deck
                </Text>
            </Pressable>

            <Pressable 
            style={({ pressed }) => [styles.testModeButton || {}, {opacity:pressed ? 0.5 : 1}]}
            onPress={() => navigation.push("TestView", {deckName: deckName})}>
                <Text style={styles.testModeButtonText}>
                    Enter test mode
                </Text>
            </Pressable>

            <Pressable 
            style={({ pressed }) => [styles.testModeButton || {}, {opacity:pressed ? 0.5 : 1}]}
            onPress={() => navigation.push("EditView", {deckName: deckName})}>
                <Text style={styles.testModeButtonText}>
                    Edit the deck
                </Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#231942',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    deckName: {
        color: 'white',//'#BE95C4',
        fontSize: 62,
    },
    testModeButton: {
        backgroundColor: '#BE95C4',
        height: 150,
        width: 300,
        marginVertical: 5,
        marginHorizontal: 30,
        borderRadius: 20,
        paddingVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    testModeButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5E548E'
    }
})