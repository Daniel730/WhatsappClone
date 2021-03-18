import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';

export default props => (
    <Router>
        <Scene key="boasVindas" component={BoasVindas} title="Bem-Vindo" />
        <Scene key="login" component={FormLogin} initial title="Login" />
        <Scene key="cadastro" component={FormCadastro} title="Cadastro" />
    </Router>
)
