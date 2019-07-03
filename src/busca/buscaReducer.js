const INITIAL_STATE = {profissao:'',servico:'',listaProfissao: [],listaServicos:[],listaPrestador:[],prestador:[]}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'BUSCA_PROFISSAO_FETCHED':
            return { ...state, listaProfissao: action.payload.data }
      
            case 'BUSCA_SERVICO_FETCHED':
            return { ...state, listaServicos: action.payload.data }
            case 'BUSCA_PRESTADOR_FETCHED':
            return { ...state, listaPrestador: action.payload.data }

            case 'PROFISSAO_CHANGED':
            return { ...state, profissao: action.payload }
            case 'SERVICO_CHANGED':
            return { ...state, servico: action.payload }
            case 'SOLICITACAO_PRESTADOR_FETCHED':
            return { ...state, prestador: action.payload }
            
            
        default:
            return state
    }
    
}