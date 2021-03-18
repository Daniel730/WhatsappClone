import React from 'react';
import { TextInput, Button, Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { TextInputMask } from 'react-native-masked-text'
import { modificaEmail, modificaSenha } from "./../Actions/AutenticacaoActions"

const FormLogin = props => {
    return(
        <Image style={{flex: 1, width: null}} blurRadius={1.5} source={require('../imgs/bg.png')}>
            <View style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={{fontSize: 40, fontWeight: 'bold', color: 'black'}}>Whatsapp Clone</Text>
                </View>
                <TextInput
                    value={props.email} 
                    placeholderTextColor="#000" 
                    style={{fontSize: 20}} 
                    placeholder="Email" 
                    onChangeText={texto => props.modificaEmail(texto)} 
                />
                <TextInput
                    secureTextEntry
                    value={props.senha} 
                    placeholderTextColor="#000" 
                    style={{fontSize: 20}} 
                    placeholder="Senha" 
                    onChangeText={texto => props.modificaSenha(texto)}
                />
                <View style={styles.viewBtn}>
                    <Button title="Acessar" color="black" onPress={() => false} />
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
        senha: state.AutenticacaoReducer.senha
    }
)
export default connect(mapStateToProps, { modificaEmail, modificaSenha })(FormLogin);