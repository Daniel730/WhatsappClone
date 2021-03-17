import React from 'react';
import { Button, TextInput, View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { TextInputMask } from 'react-native-masked-text'
import { modificaCodigo, modificaNumero, modificaNome } from './../Actions/AutenticacaoActions'

const FormCadastro = props => (
    <Image style={{flex: 1, width: null}} blurRadius={1.5} source={require('../imgs/bg.png')}>
        <View style={{flex: 1, padding: 10}}>
            <View style={{flex: 4, justifyContent: 'center'}}>
                <View style={styles.viewInputs}>
                    <TextInputMask 
                        type={'custom'}
                        options={{
                            mask: '+99'
                        }} value={props.codigo} 
                        placeholder="Codigo" 
                        style={{fontSize: 20, flex: 1}} 
                        placeholderTextColor="black" 
                        onChangeText={texto => props.modificaCodigo(texto)}
                    />
                    <TextInputMask 
                        type={'custom'}
                        options={{
                            mask: '+99'
                        }} 
                        value={props.numero} 
                        placeholder="Telefone" 
                        style={{fontSize: 20, flex: 3}} 
                        placeholderTextColor="black" 
                        onChangeText={texto => props.modificaNumero(texto)} 
                    />
                </View>
                <TextInput value={props.nome} placeholder="Nome" style={{fontSize:20}} placeholderTextColor="black" onChangeText={texto => props.modificaNome(texto)} />
            </View>
            <View style={{flex: 1}}>
                <Button title="Registrar" color="black" onPress={() => false} />
            </View>
        </View>
    </Image>
)

const styles = StyleSheet.create({
    viewInputs: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})

const mapStateToProps = state => ({
    nome: state.AutenticacaoReducer.nome, 
    codigo: state.AutenticacaoReducer.codigo, 
    numero: state.AutenticacaoReducer.numero
})

export default connect(mapStateToProps, { modificaCodigo, modificaNumero, modificaNome})(FormCadastro);