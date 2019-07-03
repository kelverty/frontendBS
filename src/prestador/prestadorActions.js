import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3004/api'
const INITIAL_VALUES = {prestador:[{servicos:[{}]}] }


export function getListServico() {
    const request = axios.get(`${BASE_URL}/servico`)
    return {
        type: 'PRESTADORSERV_FETCHED',
        payload: request
    }
}

export function getList() {
    const request = axios.get(`${BASE_URL}/usuario`)
    return {
        type: 'PRESTADOR_FETCHED',
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

            const listCampo = values.prestador[0].servicos || []
           
             listCampo.map(async function (cm,index){
                let Serv = await  axios.get(`${BASE_URL}/servico/${cm._id}`)
        
          
                values.prestador[0].servicos[index]=Serv.data
           
            
            })
           
            }
console.log(values)
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/usuario/${id}`, values)
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
        initialize('prestadorForm', campo)
    ]
}

export function showDelete(campo) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('prestadorForm', campo)
    ]
}

export function init() {
    return [
       
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('prestadorForm', INITIAL_VALUES)
    ]
}