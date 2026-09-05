import React from 'react';
import {Button, View, Text} from 'react-native';
export default class Lista extends React.Component {
  constructor (props) {
    super(props);
    this.state = {dados: []};
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151.json')
      .then((response) => response.json())
      .then((responseJson) => {
        //Success 
        console.log(responseJson); 
        //global.dados = 
        
        this.setState({dados: responseJson.results});

      })
      .catch((error) => console.error(error));
}
render() {
    return(
      <View> 
        <Text>Lista de Pokemons</Text>
        {
          this.state.dados.map((l,i) => (
            <Text>
              {l.name}
            </Text>
          ))
        }
      </View>
    )
  }

}