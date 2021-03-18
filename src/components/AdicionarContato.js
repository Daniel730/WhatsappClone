import React from 'react';
import {View, TextInput, Button, Text} from "react-native";
import {connect} from 'react-redux';
import {modificaAdionaContatoEmail, adicionaContato} from '../Actions/AppActions';

const AdicionarContato = props => (
    <View style={{ flex: 1, justifyContent: "center", padding: 20}}>
        <View style={{ flex:1, justifyContent: "center"}}>
            <TextInput 
                placeholder="E-mail"
                style={{fontSize: 20, height: 45}}
                onChangeText={texto => props.modificaAdionaContatoEmail(texto)}
                value={props.adiciona_contato_email}
            />
        </View>
        <View style={{ flex: 1}}>
            <Button title="Adicionar" color="black" onPress={() => props.adicionaContato(props.adiciona_contato_email)} />
            <Text style={{color: 'red', fontSize: 20}}>
                {props.cadastro_resultado_txt_erro}
            </Text>
        </View>
    </View>
)
const mapStateToProps = state => ({
    adiciona_contato_email: state.AppReducer.adiciona_contato_email,
    cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro
})
export default connect(mapStateToProps, { modificaAdionaContatoEmail, adicionaContato })(AdicionarContato)