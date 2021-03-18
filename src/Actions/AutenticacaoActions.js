import firebase from 'firebase';
import {Actions} from "react-native-router-flux";
import b64 from 'base-64';
import {
    MODIFICA_EMAIL,
    MODIFICA_NOME,
    MODIFICA_SENHA,
    CADASTRO_USUARIO_ERRO,
    CADASTRO_USUARIO_SUCESSO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
} from "./types"

export const modificaEmail = texto => {
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = text => {
    return {
        type: MODIFICA_SENHA,
        payload: text
    }
}

export const modificaNome = text => {
    return {
        type: MODIFICA_NOME,
        payload: text
    }
}

export const cadastraUsuario = ({nome, email, senha}) => {
    return dispatch => {
    
        dispatch({type: CADASTRO_EM_ANDAMENTO})

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                let emailb64 = b64.encode(email);
                firebase.database().ref(`/contatos/${emailb64}`)
                    .push({nome})
                    .then(value => cadastroUsuarioSucesso(dispatch)).catch(err => {alert(err)})
                
            })
            .catch(err => cadastroUsuarioErro(err, dispatch))
    }
}

const cadastroUsuarioSucesso = dispatch => {
    dispatch({
        type: CADASTRO_USUARIO_SUCESSO
    })

    Actions.boasVindas();
}

const cadastroUsuarioErro = (err, dispatch) => {
    dispatch({
        type: CADASTRO_USUARIO_ERRO,
        payload: err.message
    })
}

export const autenticarUsuario = ({email, senha}) => {
    return dispatch => {

        dispatch({type: LOGIN_EM_ANDAMENTO})

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(() => {
                loginUsuarioSucesso(dispatch);
            })
            .catch(err => {
                loginUsuarioErro(err, dispatch);
            })
    }
}

const loginUsuarioSucesso = dispatch => {
    dispatch({
        type: LOGIN_USUARIO_SUCESSO
    });
    Actions.principal();
}


const loginUsuarioErro = (err, dispatch) => {
    dispatch({
        type: LOGIN_USUARIO_ERRO,
        payload: err.message
    })
}