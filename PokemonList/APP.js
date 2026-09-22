import React from 'react';
import {Button, ScrollView, Text} from 'react-native';
export default class Lista extends React.Component {
  constructor (props) {
    super(props);
    this.state = {dados: []};
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
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
      <ScrollView> 
        <Text>Lista de Pokemons</Text>
        {
          this.state.dados.map((l,i) => (
            <Text>
              {l.name}
            </Text>
          ))
        }
      </ScrollView>
    )
  }

}