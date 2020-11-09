import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';


export default function Recipe() {

    return(
        <View>
            <Button title='Dine' icon='check' color='green'/>
            <Button title='Ditch' icon='close' color='red'/>
        </View>
  
    )
}