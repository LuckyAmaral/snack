import React, {Component} from 'react';
import {Text,View, StyleSheet} from 'react-native';

export default function(props){
  return <View>
            <Text style = {estilo.grande}>
            {props.titulo} - {props.valor}
            </Text>
        </View>
}

const estilo =StyleSheet.create({
  grande:{
    fontSize:25,
    fontWeight: "bold"
  },
})