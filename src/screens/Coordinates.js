import React, { useState, useEffect } from 'react';
import { Text, View, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Linking from 'expo-linking';
import Button from '../components/Button';


export default function Coordinates() {
    // const [location, setLocation] = useState(null);
    // const [errorMsg, setErrorMsg] = useState(null);


    const openSettings = () => {
      Linking.openSettings()
    }
    const findLocation = ()=>{
      console.log('here');
      async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            "Location Unavailable",
            "Your location is needed to find a restaurant close to you",
            [
              {
                text: "Find a Recipe Suggestion Instead",
                onPress: () => navigation.navigate('Recipe'),
                style: "cancel"
              },
              { text: "Open Settings", onPress: () => openSettings() }
            ],
            { cancelable: false }
          );
         console.log('Permission to access location was denied');
        }

  
       let location = await Location.getCurrentPositionAsync({});
       console.log(location);
       
         
      }
    }
    // useEffect(() => {
    //   (async () => {
    //     let { status } = await Location.requestPermissionsAsync();
    //     if (status !== 'granted') {
    //       Alert.alert(
    //         "Location Unavailable",
    //         "Your location is needed to find a restaurant close to you",
    //         [
    //           {
    //             text: "Find a Recipe Suggestion Instead",
    //             onPress: () => navigation.navigate('Recipe'),
    //             style: "cancel"
    //           },
    //           { text: "Open Settings", onPress: () => openSettings() }
    //         ],
    //         { cancelable: false }
    //       );
    //       setErrorMsg('Permission to access location was denied');
    //     }
  
    //     let location = await Location.getCurrentPositionAsync({});
    //     setLocation(location);
    //   })();
    // }, []);
  
    // let text = 'Finding your location';
    // if (errorMsg) {
    //   text = errorMsg;
    // } else if (location) {
    //   text = <Button title='Location Found. Find a Restaurant' icon='check' color='green'onChange={()=>{navigation.navigate('Restaurant', {
    //     location: location
    //   })}}/>
    //   // text = JSON.stringify(location)
    // } else{
    //   text = <Button title='Find my Location' icon='check' color='green'onChange={()=>{Location.getCurrentPositionAsync()}}/>
    // }


    
    // return(
    //     <View style={styles.screen}>
            
    //        {text}
    //     </View>
    // )
    let findUser = findLocation()
    return(
      console.log(findUser)
   
    )
}
const styles = StyleSheet.create({
  screen:{
      flex:1,
      backgroundColor:'black',
      justifyContent:'center',
  },
  
})