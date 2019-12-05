import * as SearchTypes from './types'

// deve ser chamado no App
export const loadRequestUser = (id) => {
    return {
        type: SearchTypes.LOAD_REQUEST_USER,
        id
    }
}

// user povoará a store
export const requestUserSuccess = (user) => {
    return {
        type: SearchTypes.REQUEST_USER_WITH_ID_SUCCESS,
        user
    }
}

export const errorUser = () => {
    return {
        type: SearchTypes.REQUEST_USER_WITH_ID_FAILURE,
        error: "errooooou!"
    }
}

export const testeAction = () => {
    return {
        type: "TESTE_TYPE"
    }
}

