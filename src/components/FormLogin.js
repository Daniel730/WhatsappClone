import React from 'react';
import { TextInput, Button, Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { TextInputMask } from 'react-native-masked-text'
import { modificaCodigo, modificaNumero } from "./../Actions/AutenticacaoActions"

const FormLogin = props => {
    console.log(props);
    return(
        <Image style={{flex: 1, width: null}} blurRadius={1.5} source={require('../imgs/bg.png')}>
            <View style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={{fontSize: 40, fontWeight: 'bold', color: 'black'}}>Whatsapp Clone</Text>
                </View>
                <View style={styles.viewInputs}>
                    <TextInputMask 
                        type={'custom'}
                        options={{
                            mask: '+99'
                        }}
                        value={props.codigo} 
                        placeholderTextColor="#000" 
                        style={{fontSize: 20, height: 45, flex: 1}} 
                        placeholder="Codigo" 
                        onChangeText={texto => props.modificaCodigo(texto)} 
                    />
                    <TextInputMask 
                        type={'custom'}
                        options={{
                            mask: '(99) 9 9999-9999'
                        }}
                        value={props.numero} 
                        placeholderTextColor="#000" 
                        style={{fontSize: 20, height: 45, flex: 3}} 
                        placeholder="Número de telefone" 
                        onChangeText={texto => props.modificaNumero(texto)}
                    />
                </View>
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
    viewInputs: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    viewBtn: {
        flex: 2
    }
})
const mapStateToProps = state => (
    {
        codigo: state.AutenticacaoReducer.codigo,
        numero: state.AutenticacaoReducer.numero
    }
)
export default connect(mapStateToProps, { modificaCodigo, modificaNumero })(FormLogin);