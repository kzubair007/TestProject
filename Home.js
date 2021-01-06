/* eslint-disable */
import * as React from "react";
import {Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {Appbar, Title, Button, Card, Headline} from 'react-native-paper';
import Header from './Header'
import {useEffect, useRef, useState} from 'react';

const Home=({navigation})=>{

    const[info,setInfo]= useState("")
    const[infos,setInfos]= useState([])
    const image = { uri: "https://i.pinimg.com/originals/cc/1e/c6/cc1ec66bb88d96db9fdb9f5e11f11cd4.jpg" };
    const onClick= (restaurant)=>{

        navigation.navigate("Detail", {resInfos:restaurant.restaurant_name,res_id:restaurant.restaurant_id,
            city: restaurant.location.city_name, resLogo: restaurant.logo, cuisines: restaurant.cuisines,
        rating:restaurant.rating.restaurant_avg_rating})
    }

    useEffect(()=>{
        getRestaurants()
    },[])

    const getRestaurants= ()=>{
        let myRestaurants;

        fetch("https://staging.fastor.in:8090/v1/m/restaurant?city_id=118&&", {
            method: "GET",
            headers: {
                "Authorization": "Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNCIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjAtMDctMjRUMTE6NTk6NDUuMDAwWiIsImlhdCI6MTYwOTQwOTcyNSwiZXhwIjoxNjE2NjY3MzI1fQ.jZKMdl6YHTxAfEva4aN66s1EYs0XxefFISr_yQwgTu8"
            }
        })
            .then(data=> data.json())
            .then(results =>{
                setInfos(results)
                // console.log(results)

            })

    }
    return(
        <ImageBackground source={image} style={styles.image} blurRadius={2}>
        <View style={{flex:1}}>
            <Header name = "Home"/>
            <View style={{alignItems: "center"}}>
                <Text style={{fontSize:20, fontWeight:"bold", marginVertical:15,color: "black",fontFamily: "monospace"}}>List of Restaurants</Text>
            </View>
            <View>
                <FlatList
                    data={infos}
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity onPress={()=>onClick(item)}>
                                <Card style={{margin: 5, padding: 12,backgroundColor:"darkslategrey"}}>
                                    <Text style={{color:"black",fontFamily: "monospace" }}>{item.restaurant_name}</Text>
                                </Card>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item=>item.restaurant_id}
                >

                </FlatList>
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode:"cover",
        justifyContent: "center"
    }
});

export default Home
