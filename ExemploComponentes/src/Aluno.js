import React, {Component} from 'react';
import {Text,View, StyleSheet} from 'react-native';
import Estilo from './Estilo'

function parOuImpar(num){
  if (num % 2== 0){
    return <Text>Par</Text>
  } else {
    return <Text>Impar</Text>
  }
}

function passou(num){
  if (num >= 6.0){
    return <Text style = {Estilo.azul}> Passou</Text>
  }else{
    return <Text style= {Estilo.vermelho}> Reprovou</Text>
  }
}

export default function(props){
  return <View>
            <Text style = {estilo.grande}>
            {props.nome}
            </Text>
            <Text style = {estilo.small}> Madia: {props.media} , Falta: {props.falta}</Text>
            <Text>{parOuImpar(props.media)} - {passou(props.media)}</Text>
        </View>
}

const estilo =StyleSheet.create({
  grande:{
    fontSize:25,
    fontWeight: "bold",
    color: 'blue',
  },
  small:{
    fontSize:15,
    fontWeight: "Italic",
    color: 'red',
    textDecorationLine: "underline",
  }
})