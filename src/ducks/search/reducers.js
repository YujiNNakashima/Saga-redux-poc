import * as SearchTypes from './types'

const initialState = {
    input: '',
    loading: false,
    user: []
}

export default function todos(state = initialState, action) {
    switch (action.type) {
        case SearchTypes.LOAD_REQUEST_USER:
            return {
                ...state,
                loading: true
            }
        case SearchTypes.REQUEST_USER_WITH_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.data
            }
        case SearchTypes.REQUEST_USER_WITH_ID_FAILURE:
            return {
                ...state,
                loading: false,
                message: "errooooou"
            }
        case 'TESTE_TYPE':
            return {
                ...state,
                input: 'teste input'
            }
        
        default:
            return state
    }
}