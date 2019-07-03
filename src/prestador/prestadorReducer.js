const INITIAL_STATE = {list: [],listServ:[]}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PRESTADOR_FETCHED':
            return { ...state, list: action.payload.data }
      
            case 'PRESTADORSERV_FETCHED':
            return { ...state, listServ: action.payload.data }
        default:
            return state
    }
    
}