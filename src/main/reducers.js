import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import TabReducer from '../common/tab/tabReducer'
import ProfissaoReducer from '../profissao/profissaoReducer'
import CampoReducer from '../campo/campoReducer'
import FormularioReducer from '../formulario/formularioReducer'
import ServicoReducer from '../servico/servicoReducer'
import PrestadorReducer from '../prestador/prestadorReducer'
import BuscaReducer from '../busca/buscaReducer'
import SolicitacaoReducer from '../solicitacao/solicitacaoReducer'
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    solicitacao:SolicitacaoReducer,
    busca:BuscaReducer,
    auth: AuthReducer,
    prestador:PrestadorReducer,
    servico:ServicoReducer,
    formulario:FormularioReducer,
    campo:CampoReducer,
    profissao:ProfissaoReducer,
    form: formReducer,
    tab: TabReducer,
    toastr: toastrReducer
})

export default rootReducer