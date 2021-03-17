export const modificaCodigo = texto => {
    return {
        type: 'modifica_codigo',
        payload: texto
    }
}

export const modificaNumero = text => {
    return {
        type: 'modifica_numero',
        payload: text
    }
}

export const modificaNome = text => {
    return {
        type: 'modifica_nome',
        payload: text
    }
}