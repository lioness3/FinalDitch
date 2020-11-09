import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Location from './src/screens/Location';
import Restaurant from './src/screens/Restaurant';
import Recipe from './src/screens/Recipe';
export default function App({navigation}) {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
            
        <Tab.Navigator tabBarOptions={{activeTintColor: 'tomato',
          inactiveTintColor: 'gray',   style: {
            backgroundColor: '#171F33',
            fontSize:20 
        }}} >
          <Tab.Screen name="Location" component={Location} />
          <Tab.Screen name="Restaurant" component={Restaurant} />
          <Tab.Screen name='Recipe' component={Recipe} />
        </Tab.Navigator> 
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
