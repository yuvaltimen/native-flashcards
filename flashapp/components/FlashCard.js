import { StyleSheet, View, Text, Dimensions, Pressable } from 'react-native';

import { useState } from 'react';
import { TouchableOpacity } from 'react-native';


const {height, width} = Dimensions.get('window');


function getFontSizeFromContentLength(str) {
    const size = str.length;
    console.log(str.length);
    if (size < 9) {
        return 60;
    }
    else if (size < 30) {
        return 24
    }
    else {
        return 12;
    }
}

export default function FlashCard(props) {

    const {frontText, backText} = props;
    const [viewingFront, setViewingFront] = useState(true);

    const currentSelection = viewingFront ? frontText : backText;
    const numWords = currentSelection.split(' ').length;
    const multiLine = numWords > 1;
    const fontSize = getFontSizeFromContentLength(currentSelection);

    
    return (
        <Pressable 
            style={({ pressed }) => [styles.flashCard || {}, {opacity:pressed ? 0.5 : 1}]} 
            onPress={() => {
                const toShow = viewingFront ? frontText : backText;
                console.log(toShow);
                setViewingFront(!viewingFront)
            }}>
            <View style={styles.flashCard}>
                <Text 
                    numberOfLines={multiLine ? numWords : 1}
                    adjustsFontSizeToFit
                    style={styles.flashCardText}>
                    {viewingFront ? frontText : backText}
                </Text>
            </View>
        </Pressable>
        );
}



const styles = StyleSheet.create({
    flashCard: {
        width:  width * 0.8,
        height: height * 0.62,
        borderRadius: 18,
        backgroundColor: "#807d77",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#5E548E',
        flex: 1,
      },
      flashCardText: {
        color: '#E0B1CB',
        fontWeight: 500,
        fontSize: 60,
        textAlign: 'center',
      }
  });
  
 FlashCard;