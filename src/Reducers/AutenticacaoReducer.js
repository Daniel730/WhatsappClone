const INITIAL_STATE = {
    nome: '',
    codigo: '',
    numero: ''
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === "modifica_codigo"){
        return { ...state, codigo: action.payload }
    }
    if(action.type === "modifica_numero"){
        return { ...state, numero: action.payload }
    }
    if(action.type === "modifica_nome"){
        return { ...state, nome: action.payload }
    }
    return state;
}