import React from 'react';
import {View} from 'react-native';
import FormCadastro from './components/FormCadastro';
import FormLogin from './components/FormLogin';

export default props => (
    <View style={{flex: 1}}>
        <FormLogin />
        <FormCadastro />
    </View>
)