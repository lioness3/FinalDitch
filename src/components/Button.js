import * as React from 'react';
import { View,TouchableHighlight, Text, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

// onchange setnew option to true

export default function Button(props) {
  
  
  return (
    <View style={[{backgroundColor:`${props.color}`},styles.buttonContainer]}>
    <TouchableHighlight>
     <Text style={styles.buttonContent}>
      {props.title}
      <FontAwesome name={props.icon} size={50} color="black" />
     </Text>
    </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer:{
  borderColor:'black',
  borderWidth:2,
  margin:1,
  
  },
  buttonContent:{
 
  }
})