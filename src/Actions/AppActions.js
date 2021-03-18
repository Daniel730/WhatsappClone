import firebase from 'firebase';
import b64 from 'base-64';
import _ from "lodash";

import {MODIFICA_ADICIONA_CONTATO_EMAIL, ADICIONA_CONTATO_ERRO} from "./types";

export const modificaAdionaContatoEmail = texto => {
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    }
}

export const adicionaContato = email => {
    return dispatch=>{
        let emailB64 = b64.encode(email);
    
        firebase.database().ref(`/contatos/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if(snapshot.val()){
                    //email do usuario a ser adicionado 
                    //email
                    const dadosUsuario = _.first(_.values(snapshot.val()));
                    //email  do usuário autenticado
                    const {currentUser} = firebase.auth();
                    let emailUsuariob64 = b64.encode(currentUser.email);

                    firebase.database().ref(`/usuario_contatos/${emailUsuariob64}`)
                        .push({email, nome: dadosUsuario.nome})
                        .then(() => {
                            alert("Sucesso!")
                        })
                        .catch(err => alert(err));
                }else{
                    dispatch({type: ADICIONA_CONTATO_ERRO, payload: "Email informado não corresponde a um usuário válido!"})
                }
            })
    }
}