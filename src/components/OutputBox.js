import * as React from 'react';
import { View,TouchableHighlight, Text, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

// onchange setnew option to true

export default function OutputBox(props) {
  console.log(props);
  
  if (props.details){
  
    return(
      <View style={styles.outputContainer}>

        <Text style={styles.outputText}>
      {props.displayText}
       {props.details}
       
        </Text>

      </View>
    )
  }
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
      flex:.5,
        padding:30,
        marginHorizontal:20,
        backgroundColor:'lightgrey',
        borderColor:'darkgrey',
        borderWidth:5,
        borderRadius:10
    },
    outputText:{
        textAlign:'center',
        fontWeight:'bold',
        color:'black',
        fontSize:20
    }
})