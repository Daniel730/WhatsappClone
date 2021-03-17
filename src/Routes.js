import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default props => (
    <Router>
        <Scene key="login" component={FormLogin} title="Login" />
        <Scene key="cadastro" component={FormCadastro} title="Cadastro" />
    </Router>
)
