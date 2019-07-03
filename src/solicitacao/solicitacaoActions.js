import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'https://bs-backend-sr.herokuapp.com/api/'



export const changeServico = event => {
    return  dispatch => {
    const request =   axios.get(`${BASE_URL}/servico/${event.target.value}`) 
    .then(resp => {
              
       
        dispatch({ type: 'SERVICO_SOLICITACAO_FETCHED',
        payload: resp})
       
    })
   

}
}


export function mudarServico(idServico){
    return {type: 'SERVICO_CHANGED',payload: idServico}
}

export  function  abrir (valor){
   
    return   [
      
     
        showSolicitacao() 
                   
    ]
   


}
export function getServico(servico) {
  
    return{type: 'SERVICO_SOLICITACAO_FETCHED',
    payload: servico }
}
 
export function update(values) {
    return submit(values, 'put')
}

export function visualizarTomador(solicitacao){
  
    return [
        showTabs('tabResumo'),
        selectTab('tabResumo'),
        { type: 'SOLICITACAO_PRESTADOR_VISUALIZAR',
    payload: solicitacao},dispatch => {  dispatch(window.location.replace("/#/visualizarTomador/"))}]
    
}

export function remove(values) {
    return submit(values, 'delete')
}
export function create(values) {
    return submit(values, 'post')
}
function submit(values, method) {
    return async dispatch => {
 
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/solicitacao/${id}`, values)
            .then(resp => {
              
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(finit())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function submitVisita(values) {
    return async dispatch => {
 
        const id = values._id ? values._id : ''
        values.status='1'
     
        axios['put'](`${BASE_URL}/solicitacao/${id}`, values)
            .then(resp => {
              
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(visualizar())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}
export function submitOrcamento(values) {
    return async dispatch => {
        values.status='3'
        const id = values._id ? values._id : ''
        axios['put'](`${BASE_URL}/solicitacao/${id}`, values)
            .then(resp => {
              
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(visualizar())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}
export function submitAvaliacao(values) {
    return async dispatch => {
   
        const id = values._id ? values._id : ''
        axios['put'](`${BASE_URL}/usuario/${id}`, values)
            .then(resp => {
              
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(visualizar())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}
export function Aprovar(values,status) {

    return async dispatch => {
        values.status=status
        const id = values._id ? values._id : ''
        axios['put'](`${BASE_URL}/solicitacao/${id}`, values)
            .then(resp => {
              
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                if (status==6){dispatch(showAvaliacao(values.prestador[0]))}else{
                dispatch(showResumo(values))}
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showAvaliacao(campo){
    return [ 
        showTabs('tabAva'),
        selectTab('tabAva'),
        initialize('avaliacaoForm',campo)
    ]
    
}
export function initAvaliacao(campo){
    return [ 
        showTabs('tabAva'),
        selectTab('tabAva'),
       // initialize('avaliacaoForm', campo)
    ]
    
}

export function showResumo(campo) {
    return [ 
        showTabs('tabResumo'),
        selectTab('tabResumo'),
        //initialize('campoForm', campo)
    ]

}
export function showSolicitacao() {
    return [ 
        showTabs('tabAbertura','tabSolicitacao'),
        selectTab('tabSolicitacao'),
       // initialize('solicitacaoForm', solicitacao)
    ]
}

export function showDelete(campo) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('campoForm', campo)
    ]

}
export function visualizar(solicitacao){
  
    return [
        showTabs('tabOrcamento','tabResumo','tabVisita'),
        selectTab('tabResumo'),
        { type: 'SOLICITACAO_PRESTADOR_VISUALIZAR',
    payload: solicitacao},dispatch => {  dispatch(window.location.replace("/#/visualizarSolicitacao/"))}]
    
}
export function showOrcamento(campo) {
   
    return [ 

        showTabs('tabOrcamento','tabResumo','tabVisita'),
        selectTab('tabOrcamento'),
        initialize('orcamentoForm', campo)
    ]
}
export function showVisita(campo) {
  
        return [ 

            showTabs('tabResumo','tabVisita','tabOrcamento'),
            selectTab('tabVisita'),
           initialize('orcamentoForm', campo)
        ]  
   

}
export function showAprovacao(campo) {
    return [ 
        

        showTabs('tabAprovacao'),
        selectTab('tabAprovacao'),
       // initialize('orcamentoForm', campo)
    ]
}


export function showVisitaTomador(campo) {
    return [ 

        showTabs('tabResumo','tabApVisita'),
        selectTab('tabApVisita'),
    
    ]  
}
export function showOrcamentoTomador(campo) {
    return [ 

        showTabs('tabResumo','tabApOrca'),
        selectTab('tabApOrca'),
    
    ]  
}

export function initForm(solicitacao) {
    return [
        
        showTabs('tabAbertura','tabSolicitacao'),
        selectTab('tabSolicitacao'),
        initialize('solicitacaoForm', solicitacao)
      
    ]
}
export function init() {
    return [
        
       // tabSolicitacao
        //tabConfirmacao
        showTabs('tabAbertura'),
        selectTab('tabAbertura'),
      
    ]
}

export function finit() {
    return [
        
       // tabSolicitacao
        //tabConfirmacao
        showTabs('tabConfirmacao'),
        selectTab('tabConfirmacao'),
      
    ]
}