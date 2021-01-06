/* eslint-disable */
import * as React from "react";
import {Text, View, StyleSheet,FlatList,TextInput,ImageBackground} from 'react-native';
import {Appbar, Title, Button, Card} from 'react-native-paper';
import Header from './Header'
import {useEffect, useRef, useState} from 'react';

const Login= ({navigation})=>{
    let textInput=useRef(null)

    const[phoneNumber, setPhoneNumber]= useState()
    const[focusInput, setFocusInput]= useState(true)

    const onChangePhone= (number)=>{
        setPhoneNumber(number)
    }
    const onChangeFocus=()=>{
        setFocusInput(true)
    }
    const onChangeBlur=()=>{
        setFocusInput(false)
    }
    useEffect(()=>{

    },[])

    const onClick= ()=>{
        navigation.navigate("OTP")
    }

    const image = { uri: "https://i.pinimg.com/originals/cc/1e/c6/cc1ec66bb88d96db9fdb9f5e11f11cd4.jpg" };

    return (
        <ImageBackground source={image} style={styles.image} blurRadius={2}>
            <View style={{flex: 1}}>

                <Header name= "Login Screen"/>
                <View style={{flex: 0.4, justifyContent: "center",alignItems: "center"}}>
                    <Text style={{fontSize:25, fontWeight: "bold",color: "black",fontFamily: "monospace"}}>Login with Mobile Number</Text>
                </View>

                <View style={{justifyContent: "center"}}>
                    <View style={{width: "70%", alignSelf: "center"}}>
                        <TextInput
                            placeholder={"Enter Mobile Number"}
                            style={{padding:10,borderRadius:10,borderBottomWidth:1}}
                            keyboardType="numeric"
                            onChangeText={onChangePhone}
                            value={phoneNumber}
                            onFocus={onChangeFocus}
                            onBlur={onChangeBlur}
                        />
                    </View>
                    <Button
                        icon="content-save"
                        mode="contained"
                        theme={{colors: {primary: "cadetblue"} }}
                        style={{margin: 30}}
                        onPress={() => onClick()}>
                        <Text style={{color: "white"}}>Send Code</Text>
                    </Button>
                </View>

            </View>
        </ImageBackground>


    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode:"cover",
        justifyContent: "center"
    }
});


export default Login;
