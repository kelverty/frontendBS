import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3004/api'
const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(`${BASE_URL}/servico`)
    return {
        type: 'SERVICOS_FETCHED',
        payload: request
    }
}
export function getProfissao() {
    const request = axios.get(`${BASE_URL}/profissao`)
    return {
        type: 'SERVICOSPROF_FETCHED',
        payload: request
    }
}

export function getFormulario() {
    const request = axios.get(`${BASE_URL}/formulario`)
    return {
        type: 'SERVICOSFORM_FETCHED',
        payload: request
    }
}




export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return async dispatch => {
        if (method!='delete'){

            let profissao = await  axios.get(`${BASE_URL}/profissao/${values.profissao[0]._id}`)
            let formulario = await  axios.get(`${BASE_URL}/formulario/${values.formulario[0]._id}`)
           
            values.profissao[0].descricao=profissao.data.descricao
            values.profissao[0].sinonimos=profissao.data.sinonimos
                
            values.formulario[0].descricao=formulario.data.descricao
            values.formulario[0].campos=formulario.data.campos

        
              
       
           
            }
         
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/servico/${id}`, values)
            .then(resp => {
              
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(campo) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('servicoForm', campo)
    ]
}

export function showDelete(campo) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('servicoForm', campo)
    ]
}

export function init() {
    return [
       
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('servicoForm', INITIAL_VALUES)
    ]
}