const INITIAL_STATE = {list: [],listProf:[], listForm:[]}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        


        case 'SERVICOS_FETCHED':
            return { ...state, list: action.payload.data }
            case 'SERVICOSPROF_FETCHED':
            return { ...state, listProf: action.payload.data }
            case 'SERVICOSFORM_FETCHED':
            return { ...state, listForm: action.payload.data }
      
            
        default:
            return state
    }
    
}