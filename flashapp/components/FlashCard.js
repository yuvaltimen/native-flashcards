import { StyleSheet, View, Text, Dimensions } from 'react-native';

import { useState } from 'react';
import { TouchableOpacity } from 'react-native';


const {height, width} = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');
// const [height, width, scale, fontScale] = windowDimensions;



export default function FlashCard(props) {

    const {frontText, backText} = props;
    const {text} = props;

    const [viewingFront, setViewingFront] = useState(true);

    return (
        <TouchableOpacity style={styles.flashCard} onPress={() => {
            const toShow = viewingFront ? frontText : backText;
            console.log(toShow);
            setViewingFront(!viewingFront)
            }
        }>
            
            <View style={styles.flashCard}>
                <Text style={styles.flashCardText}>{viewingFront ? frontText : backText}</Text>
            </View>
        </TouchableOpacity>
        );
}



const styles = StyleSheet.create({
    flashCard: {
        width:  width / 3,
        height: height / 8,
        borderRadius: 18,
        backgroundColor: "#807d77",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      flashCardText: {
        color: '#ffffff',
        fontSize: 32,
        textAlign: 'center'
      }
  });
  
 FlashCard;