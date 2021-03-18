import React, {Component} from 'react';
import { TextInput, Button, Text, View, StyleSheet, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from "./../Actions/AutenticacaoActions"

class FormLogin extends Component {
    _autenticarUsuario(){
        const {email, senha} = this.props;
        this.props.autenticarUsuario({email, senha});
    }

    renderBtnAcessar(){
        if(this.props.loadingLogin){
            return(
                <ActivityIndicator size="large" color="black" />
            )
        }
        return(
            <Button title="Acessar" color="black" onPress={() => this._autenticarUsuario()} />
        )
    }

    render() {
        return(
            <Image style={{flex: 1, width: null}} blurRadius={1.5} source={require('../imgs/bg.png')}>
                <View style={styles.container}>
                    <View style={styles.viewTitle}>
                        <Image source={require('../imgs/logo.png')} />
                        <Text style={{fontSize: 40, fontWeight: 'bold', color: 'black'}}>Whatsapp Clone</Text>
                    </View>
                    <TextInput
                        value={this.props.email} 
                        placeholderTextColor="#000" 
                        style={{fontSize: 20}} 
                        placeholder="Email" 
                        onChangeText={texto => this.props.modificaEmail(texto)} 
                    />
                    <TextInput
                        secureTextEntry
                        value={this.props.senha} 
                        placeholderTextColor="#000" 
                        style={{fontSize: 20}} 
                        placeholder="Senha" 
                        onChangeText={texto => this.props.modificaSenha(texto)}
                    />
                    <View style={styles.viewBtn}>
                        {this.renderBtnAcessar()}
                        <Text style={{color: 'red', fontSize: 18}}>
                            {this.props.erroLogin}
                        </Text>
                        <TouchableHighlight onPress={() => Actions.cadastro()}>
                            <Text style={{color: "black", fontSize: 20}}>
                                Faça seu cadastro agora, é grátis e rápido!
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Image>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    viewTitle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    viewBtn: {
        flex: 2
    }
})
const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loadingLogin: state.AutenticacaoReducer.loadingLogin
    }
)
export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(FormLogin);