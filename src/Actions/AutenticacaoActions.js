import firebase from 'firebase';
import {Actions} from "react-native-router-flux";
import b64 from 'base-64';

export const modificaEmail = texto => {
    return {
        type: 'modifica_email',
        payload: texto
    }
}

export const modificaSenha = text => {
    return {
        type: 'modifica_senha',
        payload: text
    }
}

export const modificaNome = text => {
    return {
        type: 'modifica_nome',
        payload: text
    }
}

export const cadastraUsuario = ({nome, email, senha}) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                let emailb64 = b64.encode(email);
                firebase.database().ref('/contatos/'+emailb64)
                    .push({nome})
                    .then(value => cadastroUsuarioSucesso(dispatch)).catch(err => {alert(err)})
                
            })
            .catch(err => cadastroUsuarioErro(err, dispatch))
    }
}

const cadastroUsuarioSucesso = dispatch => {
    dispatch({
        type: "cadastro_usuario_sucesso"
    })

    Actions.boasVindas();
}

const cadastroUsuarioErro = (err, dispatch) => {
    dispatch({
        type: "cadastro_usuario_erro",
        payload: err.message
    })
}