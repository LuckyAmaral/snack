import  React, {Component} from 'react';
import { Text, View } from 'react-native';
import Aluno from './Src/Aluno';


export default class App extends Component {
  render(){
    return (<View>
      <Aluno nota1="10" nota2="9"/>
      </View>
    );}
}

