import React, {Component} from 'react';
import { Button, TextInput, View, Image, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from './../Actions/AutenticacaoActions'

class FormCadastro extends Component {
    
    _cadastraUsuario(){
        const {nome, email, senha} = this.props;

        this.props.cadastraUsuario({nome, email, senha});
    }

    render(){
        return(
            <Image style={{flex: 1, width: null}} blurRadius={1.5} source={require('../imgs/bg.png')}>
                <View style={{flex: 1, padding: 10}}>
                    <View style={{flex: 4, justifyContent: 'center'}}>
                        <TextInput 
                            value={this.props.nome} 
                            placeholder="Nome" 
                            style={{fontSize:20}} 
                            placeholderTextColor="black" 
                            onChangeText={texto => this.props.modificaNome(texto)} 
                        />
                        <TextInput
                            value={this.props.email} 
                            placeholder="Email" 
                            style={{fontSize: 20}} 
                            placeholderTextColor="black" 
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput
                            secureTextEntry
                            value={this.props.senha} 
                            placeholder="Senha" 
                            style={{fontSize: 20}} 
                            placeholderTextColor="black" 
                            onChangeText={texto => this.props.modificaSenha(texto)} 
                        />
                    </View>
                    <View style={{alignItems: "center", padding: 30}}>
                        <Text style={{color: 'red', fontSize: 20}}>{this.props.erroCadastro}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Button title="Registrar" color="black" onPress={() => this._cadastraUsuario()} />
                    </View>
                </View>
            </Image>
        )
    }
}

const mapStateToProps = state => ({
    nome: state.AutenticacaoReducer.nome, 
    email: state.AutenticacaoReducer.email, 
    senha: state.AutenticacaoReducer.senha,
    erroCadastro: state.AutenticacaoReducer.erroCadastro
})

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome, cadastraUsuario})(FormCadastro);