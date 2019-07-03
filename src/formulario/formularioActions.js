import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'https://bs-backend-sr.herokuapp.com/api/'
const INITIAL_VALUES = {campos: [{}], debts: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/formulario`)
    return {
        type: 'FORMULARIO_FETCHED',
        payload: request
    }
}
export function getListCampo() {
    const request = axios.get(`${BASE_URL}/campo`)
    return {
        type: 'CAMPOFORM_FETCHED',
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

            const listCampo = values.campos || []
             listCampo.map(async function (cm,index){
                let camposRe = await  axios.get(`${BASE_URL}/campo/${cm._id}`)
      
                values.campos[index].tipo=camposRe.data.tipo
                values.campos[index].descricao=camposRe.data.descricao
                values.campos[index].valoresLista=camposRe.data.valoresLista
            })
           
            }
  
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/formulario/${id}`, values)
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
        initialize('formularioForm', campo)
    ]
}

export function showDelete(campo) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('formularioForm', campo)
    ]
}

export function init() {
    return [
       
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('formularioForm', INITIAL_VALUES)
    ]
}


