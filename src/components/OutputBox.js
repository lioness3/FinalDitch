import * as React from 'react';
import { View,TouchableHighlight, Text, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

// onchange setnew option to true

export default function OutputBox(props) {
  console.log(props);
  
  
  return (
    <View style={styles.outputContainer}>

     <Text style={styles.outputText}>
 
    {props.displayText}
     </Text>

    </View>
  );
}
const styles = StyleSheet.create({
    outputContainer:{
        padding:30,
        backgroundColor:'lightgrey'
    },
    outputText:{
        
        color:'black',
        fontSize:20
    }
})