const INITIAL_STATE = {list: [],listCampo:[]}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CAMPOFORM_FETCHED':
            return { ...state, listCampo: action.payload.data }
      
            case 'FORMULARIO_FETCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
    
}