const INITIAL_STATE = {servico: [],servicoVisu:[]}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SERVICO_SOLICITACAO_FETCHED':
            return { ...state, servico: action.payload.data }
            case 'SOLICITACAO_PRESTADOR_VISUALIZAR':
            return { ...state, servicoVisu: action.payload }
            
        default:
            return state
    }
    
}