/* eslint-disable */
import * as React from "react";
import {Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity,Image, ScrollView,Linking} from 'react-native';
import {Appbar, Title, Button, Card, Headline} from 'react-native-paper';
import Header from './Header'
import {useEffect, useRef, useState} from 'react';
import { SliderBox } from "react-native-image-slider-box";

const Detail= ({route})=>{

    console.log(route.params.resInfos,route.params.res_id,route.params.city,route.params.resLogo,route.params.cuisines)

    const [images,setImages]= useState([
        "http://i.hihoome.com/items/Little-Bacon-Cheeseburger.jpeg",
        "http://i.hihoome.com/items/Cheeseburger.jpeg",
        "http://i.hihoome.com/items/Cheese-Veggie-Sandwich.jpg",
        "http://i.hihoome.com/items/grilled-cheese-sandwich.jpg"])

    return(
        <View style={{ backgroundColor: "black",flex:1}}>
            <View>
                <View>
                    <Header name={"Details"}/>
                    <Card style={{height:100,elevation:7,backgroundColor: "darkslategrey"}}>
                        <Text style={{color: "white", fontSize:27, fontFamily: "monospace",marginLeft:10,fontWeight:"bold",marginTop:7}}>{route.params.resInfos}</Text>
                        <Text style={{color: "white", fontSize:22, fontFamily: "monospace",marginLeft:10,fontWeight:"bold"}}>{route.params.city}</Text>
                    </Card>
                </View>

                <View style={{flexDirection: "row"}}>
                  <View style={{marginVertical:15, flexDirection: "row",flex:1}}>
                      <TouchableOpacity onPress={()=>{Linking.openURL("https://instagram.com/fastor.official")}}>
                      <Image style={{width:50, height:50,borderRadius:10}}
                             source={{uri : "https://i.pinimg.com/736x/17/76/0a/17760a6daad2edf7f4d9b837b5437246.jpg"}}/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{Linking.openURL("https://facebook.com/fastor.official")}}>
                      <Image style={{width:50, height:50,borderRadius:30}}
                             source={{uri : "https://i.pinimg.com/736x/26/a2/85/26a2857a33ac96048936429b907be8ba.jpg"}}/>
                      </TouchableOpacity>
                  </View>
                  <View style={{marginVertical:15,flex:0.3,flexDirection:"row"}}>
                      <Image style={{width:50, height:50,borderRadius:10}} source={{uri : "https://www.flaticon.com/premium-icon/icons/svg/3257/3257727.svg"}}/>
                      <Text style={{fontFamily: "monospace",fontSize:15,color: "white",marginLeft:5,fontWeight:"bold"}}>{route.params.rating}</Text>
                  </View>
                </View>

            </View>
            <ScrollView showsVerticalScrollIndicator={true}>
                <View style={{padding:10}}>
                    <Text style={{color: "white", fontSize:25, fontFamily: "monospace"}}>Your Taste</Text>
                </View>

                <FlatList
                    horizontal={true}
                    data={route.params.cuisines}
                    renderItem={({item, index}) => (
                        <View style={{padding:10,flex:1}}>
                            <Card style={{width:140,height:185, elevation:5}}>
                                <Card.Cover style={{width:140,height:140}} source={{ uri: 'http://i.hihoome.com/items/grilled-cheese-sandwich.jpg'}} />
                                <View style={{padding:5,alignItems:"center",backgroundColor:"darkslategrey",width:140,height:47,borderBottomLeftRadius:7,borderBottomRightRadius:7}}>
                                    <Text style={{color: "white",fontWeight:"bold",padding:3,fontFamily: "monospace"}}>{item.cuisine_name}</Text>
                                </View>
                            </Card>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => '' + index}
                />
                <View style={{padding:20}}></View>

                <SliderBox
                    images={images}
                    sliderBoxHeight={150}
                    width={350}
                    autoplay={true}
                    onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                    }
                    borderRadius={20}
                />
                <View style={{paddingVertical:20}}></View>
                <View style={{padding:10}}>
                    <Text style={{color: "white", fontSize:25, fontFamily: "monospace"}}>Popular</Text>
                </View>

                <FlatList
                    data={route.params.cuisines.slice(0,4)}
                    renderItem={({item, index}) => (
                        <View style={{padding:10,flexDirection:"row"}}>
                            <View>
                                <Card style={{width:140,height:185, elevation:5}}>
                                    <Card.Cover style={{width:140,height:140}} source={{ uri: "http://i.hihoome.com/items/grilled-cheese-sandwich.jpg"}} />
                                    <View style={{padding:5,alignItems:"center",backgroundColor:"darkslategrey",width:140,height:47,borderBottomLeftRadius:7,borderBottomRightRadius:7}}>
                                        <Text style={{color: "white",fontWeight:"bold",padding:3,fontFamily: "monospace"}}>{item.cuisine_name}</Text>
                                    </View>
                                </Card>
                            </View>
                            <View style={{padding:5}}></View>
                            <View>
                                <Card style={{width:215,height:185, elevation:5,backgroundColor:"darkslategrey",padding:10}}>
                                    <Text style={{fontFamily: "monospace",fontSize:15,color: "white",paddingVertical:5}}>Lazy Bear</Text>
                                    <Text style={{fontFamily: "monospace",fontSize:11,color: "white"}}>Cakes, Pastry. Pastas</Text>
                                    <Text style={{fontFamily: "monospace",fontSize:11,color: "white"}}>Cannaught Place New Delhi</Text>
                                    <Text style={{fontFamily: "monospace",fontSize:11,color:"orange",paddingVertical:10}}>4 Offers Trending</Text>
                                    <View style={{paddingVertical:10,flexDirection: "row"}}>
                                        <View>
                                        <Text style={{fontFamily: "monospace",fontSize:11,color: "white"}}>* {route.params.rating}</Text>
                                        <Text style={{fontFamily: "monospace",fontSize:11,color: "white"}}>Popularity</Text>
                                        </View>
                                        <View style={{paddingHorizontal:15}}></View>
                                        <View>
                                            <Text style={{fontFamily: "monospace",fontSize:11,color: "white"}}>$ 200</Text>
                                            <Text style={{fontFamily: "monospace",fontSize:11,color: "white"}}>Cost for Food</Text>
                                        </View>
                                    </View>
                                </Card>
                            </View>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => '' + index}
                />

            </ScrollView>
        </View>
    )
}

export default Detail
