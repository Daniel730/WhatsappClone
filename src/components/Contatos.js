import React, {Component} from 'react';
import {View, Text, ListView, TouchableHighlight, Touchable} from "react-native";
import { connect } from 'react-redux';
import _ from "lodash";
import {contatosUsuarioFetch} from '../Actions/AppActions';
import { Actions } from 'react-native-router-flux';

class Contatos extends Component {
    
    componentWillMount() {
        this.props.contatosUsuarioFetch();
        this.criaFonteDeDados( this.props.contatos );
    }

    componentWillReceiveProps(nextProps){
        this.criaFonteDeDados(nextProps.contatos)
    }

    criaFonteDeDados( contatos ){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.fonteDeDados = ds.cloneWithRows(contatos);
    }

    renderRow(contato){
        return(
            <TouchableHighlight onPress={() => Actions.conversa({title: contato.nome, contatoNome: contato.nome, contatoEmail: contato.email})} underlayColor="#CCC">
                <View style={{flex: 1, padding: 20, borderBottomWidth: 2, borderColor: '#CCC'}}>
                    <Text style={{fontSize: 25}}>
                        {contato.nome}
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        {contato.email}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }

    render(){
        return(
            <ListView
                enableEmptySections
                dataSource={this.fonteDeDados}
                renderRow={data => (this.renderRow(data))}
            />
        )
    }
}
mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return {...val, uid}
    })
    return {
        contatos
    }
}
export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos)