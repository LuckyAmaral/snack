import React, {Component} from 'react';
import {Text,View} from 'react-native';
import Simples from './src/Simples';
import Segundo from './src/Segundo';
import Aluno from './src/Aluno';
import Estilo from './src/Estilo'

export default class App extends Component{
  render(){
    return(
      <View style ={Estilo.caixa}>
        <Text>Meu App</Text>
        <Simples texto="abacate"></Simples>
        <Simples texto= "abrobinha"/>
        <Segundo titulo="Lord" valor="23.00"/>
        <Aluno nome="lucas" media="7.5" falta="0"/>
        <Aluno nome="Leandro" media="9.0" falta="2"/>
        <Aluno nome="jesica" media="6.0" falta="2"/>
        <Aluno nome="Lauriany" media="9.5" falta="1"/>
        <Aluno nome="kebler" media="3.0" falta="9"/>
      </View>
    );
  }
}
