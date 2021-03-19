import React, { Component } from 'react';
import {View, TextInput, Button, Text} from "react-native";
import {connect} from 'react-redux';
import {modificaAdionaContatoEmail, adicionaContato} from '../Actions/AppActions';

class AdicionarContato extends Component {
    renderAdiconarContato(){
        if(!this.props.cadastro_resultado_inclusao){
            return(
                <View style={{flex: 1}}>
                    <View style={{ flex:1, justifyContent: "center"}}>
                        <TextInput 
                            placeholder="E-mail"
                            style={{fontSize: 20, height: 45}}
                            onChangeText={texto => this.props.modificaAdionaContatoEmail(texto)}
                            value={this.props.adiciona_contato_email}
                        />
                    </View>
                    <View style={{ flex: 1}}>
                        <Button title="Adicionar" color="black" onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)} />
                        <Text style={{color: 'red', fontSize: 20}}>
                            {this.props.cadastro_resultado_txt_erro}
                        </Text>
                    </View>
                </View>
            )
        }else{
            return(
                <View>
                    <Text style={{fontSize: 20}}>Cadastro realizado com sucesso!</Text>
                </View>
            )
        }
    }

    render(){
        return(
            <View style={{ flex: 1, justifyContent: "center", padding: 20}}>
                {this.renderAdiconarContato()}
            </View>
        )
    }
}

const mapStateToProps = state => ({
    adiciona_contato_email: state.AppReducer.adiciona_contato_email,
    cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
    cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
})
export default connect(mapStateToProps, { modificaAdionaContatoEmail, adicionaContato })(AdicionarContato)