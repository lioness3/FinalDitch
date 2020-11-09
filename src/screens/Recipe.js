import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import RecipeArray from '../components/RecipeArray';
import * as Linking from 'expo-linking';


export default function Recipe({navigation}) {
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)
    const [restaurants, setRestaurants] = useState(false)

    const  generateRecipe = ()=>{
        let numberOfRecipeIdeas = RecipeArray.length
        let num =  Math.floor(Math.random() * numberOfRecipeIdeas)
        let idea = RecipeArray.splice(num, 1)

        if(idea.length > 0){
            setRecipe(idea) 
            setLoading(false)
        }else{
            setLoading(true)
            setRestaurants(true)
        }
    }
    const openGoogle = (recipe)=>{
        if(recipe){
            Linking.openURL('https://www.google.com/search?q='+`${recipe}`+'+recipe')
        }else{
            setRecipe('OOPS.. CLICK DITCH ')
        }
        
      }
      if(!loading){
        return(
            <View>
                <Text>
                    {recipe}
                </Text>
                <Button title='Recipe' icon='check' color='green' onChange={()=>{
                    openGoogle(recipe)
                    
                }}/>
                <Button title='Ditch' icon='close' color='red' onChange={()=>{
                    generateRecipe()
                    
                }}/> 
            </View>
        )
      }else if(restaurants){
        return(
            <View>
                <Text>
                    Maybe you should go out to eat instead...
                </Text>
                <Button title='Find a Restaurant Near Me' icon='check' color='green' onChange={()=>{
                    navigation.navigate('Restaurant')
                    
                }}/>
            </View>
        )
      }else{
        return(
            <View>
                <Button title='Find a Recipe Suggestion' icon='list-alt' color='green' onChange={()=>{
                    generateRecipe()
                    
                }}/> 
            </View>
        ) 
      }
  
}