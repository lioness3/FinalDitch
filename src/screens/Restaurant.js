import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';


export default function Restaurant() {

    return(
        <View>
            <Button title='Dine' icon='check' color='green' onChange={()=>{
                
            }}/>
            <Button title='Ditch' icon='close' color='red' onChange={()=>{
                
            }}/>
        </View>
    )
}