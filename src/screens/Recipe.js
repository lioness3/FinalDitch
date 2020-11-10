import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import OutputBox from '../components/OutputBox';
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
            <View style={styles.screen}>
              
                    <OutputBox displayText={recipe}/>
               
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
            <View style={styles.screen}>
                <OutputBox displayText={' Maybe you should go out to eat instead...'}/>
                <Button title='Find a Restaurant Near Me' icon='check' color='green' onChange={()=>{
                    navigation.navigate('Restaurant')
                    
                }}/>
            </View>
        )
      }else{
        return(
            <View style={styles.screen}>
                <Button title='Find a Recipe Suggestion' icon='list-alt' color='green' onChange={()=>{
                    generateRecipe()
                    
                }}/> 
            </View>
        ) 
      }
  
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center'
    },
    
})