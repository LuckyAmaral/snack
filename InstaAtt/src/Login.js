import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import EstiloLogin from '../estilos/EstiloLogin';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: "",
      senha: "",
      mensagem: ""
    };
  }

  entrar() {
    this.props.navigation.navigate("Feed");
  }

  render() {
    return (
      <View style={EstiloLogin.container}>

        <Text style={EstiloLogin.lingua}>
          Português (Brasil)

          <FontAwesome
            style={EstiloLogin.margemSeta}
            name="angle-down"
            size={16}
          />
        </Text>

        <Image
          style={EstiloLogin.logo}
          source={require("../assets/Instagram_logo.png")}
        />

        <TextInput
          value={this.state.usuario}
          style={EstiloLogin.caixaTexto}
          onChangeText={(usuario) => this.setState({ usuario })}
          placeholder="Telefone, E-mail ou Nome do Usuário"
        />

        <TextInput
          value={this.state.senha}
          style={EstiloLogin.caixaTexto}
          onChangeText={(senha) => this.setState({ senha })}
          placeholder="Senha"
          secureTextEntry
        />

        <TouchableOpacity
          style={EstiloLogin.botao}
          onPress={this.entrar.bind(this)}
        >
          <Text>Login</Text>
        </TouchableOpacity>

        <Text style={EstiloLogin.lingua}>
          Esqueceu sua senha?
        </Text>

      </View>
    );
  }
}