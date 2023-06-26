import { View, Text } from "react-native";

export default function TestView({ route, navigation }) {
    const { deckName } = route.params;
    return (
        <View>
            <Text>
                {deckName} Test mode
            </Text>
        </View>
    )
}