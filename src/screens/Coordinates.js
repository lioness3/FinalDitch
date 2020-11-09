import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import Button from '../components/Button';


export default function Coordinates() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
 const  getLocation = ()=>{
       console.log('click');
    
        
    }
    console.log(location);
    
    return(
        <View>
            <Button title='Share my current location' icon='check' color='green'onChange={()=>{getLocation()}}/>
            {/* <Button title='Ditch' icon='close' color='red'/> */}
        </View>
    )
}