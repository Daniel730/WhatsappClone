import _ from 'lodash';
import React, { Component } from 'react';
import {View, Text, ListView, TouchableHighlight} from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {conversasUsuarioFetch} from "../Actions/AppActions"

class Conversas extends Component{
    componentWillMount(){
        this.props.conversasUsuarioFetch();
        this.criaFonteDeDados(this.props.conversas)
    }

    componentWillReceiveProps(nextProps){
        this.criaFonteDeDados(nextProps.conversas)
    }

    criaFonteDeDados(conversas){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        
        this.dataSource = ds.cloneWithRows(conversas)
    }

    renderRow(conversa){
        return(
            <TouchableHighlight
                onPress={ () =>  Actions.conversa({title: conversa.nome, contatoNome: conversa.nome, contatoEmail: conversa.email})}
            >
                <View style={{flex: 1, padding: 20, borderBottomWidth: 2, borderColor: '#CCC'}}>
                    <Text style={{fontSize: 25}}>
                        {conversa.nome}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }

    render(){
        return(
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        )
    }   
}

mapStateToProps = state => {
    const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
        return {...val, uid}
    })
    console.log(conversas)
    return{
        conversas
    }
}

export default connect(mapStateToProps, {conversasUsuarioFetch})(Conversas)