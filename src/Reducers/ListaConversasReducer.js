const INITIAL_STATE = {}
import {LISTA_CONVERSAS_USUARIO} from "./../Actions/types";

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LISTA_CONVERSAS_USUARIO:
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}