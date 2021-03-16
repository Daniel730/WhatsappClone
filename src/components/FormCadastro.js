import React from 'react';
import { Button, TextInput, View } from 'react-native';

export default props => (
    <View style={{flex: 1, padding: 10}}>
        <View style={{flex: 4, justifyContent: 'center'}}>
            <TextInput placeholder="Codigo" style={{fontSize:20}} />
            <TextInput placeholder="Telefone" style={{fontSize:20}} />
            <TextInput placeholder="Nome" style={{fontSize:20}} />
        </View>
        <View style={{flex: 1}}>
            <Button title="Registrar" color="black" onPress={() => false} />
        </View>
    </View>
)