import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';

export default props => (
    <Router navigationBarStyle={{backgroundColor: 'black'}} titleStyle={{color: "#fff", fontWeight: 'bold', fontSize: 20}}>
        <Scene key="boasVindas" component={BoasVindas} title="Bem-Vindo" hideNavBar />
        <Scene key="login" component={FormLogin} initial title="Login" hideNavBar />
        <Scene key="cadastro" component={FormCadastro} title="Cadastro" hideNavBar={false} />
        <Scene key="principal" component={Principal}  title="Main" hideNavBar />
        <Scene key="adicionarContato" component={AdicionarContato} title="Adicionar Contato" hideNavBar={false} />
    </Router>
)
