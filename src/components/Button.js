import * as React from 'react';
import { View,TouchableHighlight, Text, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

// onchange setnew option to true

export default function Button(props) {
  console.log(props);
  
  
  return (
    <View style={[{backgroundColor:`${props.color}`},styles.buttonContainer]}>
    <TouchableHighlight onPress={()=>{
      props.onChange()
    }}>
     <Text style={styles.buttonContent}>
      {props.title}
      <FontAwesome name={props.icon} size={30} color="black" />
     </Text>
    </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer:{
    borderColor:'grey',
    borderWidth:2,
    marginHorizontal:50,
    marginVertical:10,
    borderRadius:20,
    shadowColor:'darkgrey',
    shadowRadius:1,
    shadowOffset: { 
      width: 0,
      height: 2 
    },
    shadowOpacity:1,
  },
  buttonContent:{
    paddingVertical:20,
    textAlign:'center',
    fontWeight:'bold'
    
  }
})