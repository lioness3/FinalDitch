import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Button from '../components/Button';
import OutputBox from '../components/OutputBox';
import axios from 'axios';
import  Coordinates from './Coordinates';
import * as Linking from 'expo-linking';
import * as Location from 'expo-location';
export default function Restaurant({route, navigation}) {
    const[startFrom, setStartFrom] = useState('0')
    const [radius, setRadius] = useState('8000')
    const [data, setData] = useState([]);
    const located = useRef(false);
    const lat = useRef(null);
    const long = useRef(null);
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState('');
    const [typeOfCuisine, setTypeOfCuisine] = useState('');
    const [restaurant, setRestaurant] = useState([]);
    const [moreOptions, setMoreOptions] = useState(false)

  
   
    if(route.params){
        lat.current = route.params.location.coords.latitude;
        long.current = route.params.location.coords.longitude
        located.current = true
    }
const handleRandomNumber = (data) =>{
    
    if (data.length > 0){ 
        let newList = data
        let numberOfRestaurants = newList.length
        let num =  Math.floor(Math.random() * numberOfRestaurants)
        let restaurantInfo = newList.splice(num, 1)
        let type =  restaurantInfo[0].restaurant.cuisines
        if (type){
            if(type.includes('Fast Food')){
                return(      
                    setLoading(true),
                    handleRandomNumber(data)
                ) 
            }else{
                let typeOfCuisine = 'serves' + ' ' + type.toLowerCase()
                setTypeOfCuisine(typeOfCuisine)
            }   
        }
        let name = restaurantInfo[0].restaurant.name
        let address = 'located in' + ' ' + restaurantInfo[0].restaurant.location.locality
        setData(newList),
        setRestaurant(name),
        setAddress(address)
        setLoading(false)
       
        
    }else{
        setMoreOptions(true)
        setLoading(false)
    } 
 }
 async function  generateRestaurants(startFrom, radius) {
    let startNum = startFrom.toString()
    let radiusNum = radius.toString()
    setStartFrom(startNum)
    setRadius(radiusNum)
    
    if(located.current){
        await axios.get(`https://developers.zomato.com/api/v2.1/search?`, {
            headers: {
                'Content-Type': 'application/json',
                'user-key': 'a31bd76da32396a27b6906bf0ca707a2'
            },
            params: {
                'lat':`${lat.current}`,
                'lon': `${long.current}`,
                'start':`${startFrom}`,
                'radius':`${radius}`,
                'sort': 'real_distance'
            }
        }).then(res => {
            let data = res.data.restaurants
            setData(data)
            handleRandomNumber(data)
        }).catch(err => {
            console.log('error',err.message)
        })
     }
    } 
    const openMap = (restaurant)=>{
        Linking.openURL('https://www.google.com/maps/search/?api=1&query='+`${restaurant}`)
    }
    useEffect( ()=>{

        generateRestaurants(startFrom, radius)
      
     }, [located.current])   
     if(located.current === false){
        return(        <View style={styles.screen}>
            <Button title='Find my Location' icon='list-alt' color='green' onChange={()=>{
   Coordinates()
            
               
                
            }}/> 
        </View>)
    }else if(moreOptions){
        return(
            <View style={styles.screen}>
                <OutputBox displayText={'Please Expand your search for more restaurant suggestions'}/>
                <Button title='Expand Search' icon='check' color='green' onChange={()=>{
                    setLoading(true),
                    setMoreOptions(false), 
                    generateRestaurants((parseInt(startFrom) + 20),parseInt(radius)+ 10000)            
                }}/>
                <Button title='Ditch' icon='close' color='red' onChange={()=>{
                    generateRestaurants(startFrom, radius)
                }}/>
            </View>
        )
    }else if(loading){
        return(
            <View style={styles.screen}>
                <ActivityIndicator size='large' color='#95FCF7'/> 
                <OutputBox displayText={'Thinking...'}/>
             
            </View>
        )
     
    }else{
        return(
            <View style={styles.screen}>
                
                <OutputBox displayText={restaurant} details={address, typeOfCuisine }/>
                    
                <Button title='Dine' icon='check' color='green' onChange={()=>{
                    openMap(restaurant)     
                }}/>
                <Button title='Ditch' icon='close' color='red' onChange={()=>{
                    generateRestaurants(startFrom, radius)
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