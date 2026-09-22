import React from 'react'
import { View, Text, Image } from 'react-native'
import Estilo from '../../estilos/EstiloFeed';

export default function(props) {
   return <View> 
        <Image style={Estilo.fotoStory} source={props.foto} />
        <Text>{props.nome}</Text> 
   </View>
}
