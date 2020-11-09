import React, { useState, useEffect } from 'react';
import { Text, View, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Linking from 'expo-linking';
import Button from '../components/Button';


export default function Coordinates({navigation}) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const openSettings = () => {
      Linking.openSettings()
    }
    useEffect(() => {
      (async () => {
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
          setErrorMsg('Permission to access location was denied');
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Finding your location';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = <Button title='Location Found. Find a Restaurant' icon='check' color='green'onChange={()=>{navigation.navigate('Restaurant')}}/>
      // text = JSON.stringify(location)
    }

    console.log(location);
    
    return(
        <View>
            
           {text}
        </View>
    )
}