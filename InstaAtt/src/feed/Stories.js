import React from 'react';
import { View, Text } from 'react-native';
import Story from './Story';

export default function(props) {
   return <View>
    <Story nome="Bill" foto={require("../../assets/Bill.jpg")}></Story>
    <Story nome="Elon" foto={require("../../assets/Elon.jpg")}></Story>
    <Story nome="Vampeta" foto={require("../../assets/vampeta.jpg")}></Story>
    <Story nome="Rainha" foto={require("../../assets/rainha.jpg")}></Story>
    <Story nome="Marilyn" foto={require("../../assets/marilyn.png")}></Story>
   </View>
}
