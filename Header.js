/* eslint-disable */
import * as React from "react";
import {Text, View, StyleSheet} from 'react-native';
import {Appbar, Title} from 'react-native-paper';

const Header= (props)=> {
    return(
        <Appbar.Header
            theme={{
                colors:{
                    primary: "black",
                }
            }}
            style={{flexDirection: "row", justifyContent: "center"}}
        >
            <Title style={{color: "white"}}> {props.name} </Title>
        </Appbar.Header>
    )
}

export default Header;
