import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'https://bs-backend-sr.herokuapp.com/api/'

export const changeProfissao = event => {
    const UsuarioLogado= JSON.parse(localStorage.getItem('UsuarioLogado'))
  
   return  [
       {type: 'PROFISSAO_CHANGED',payload: event.target.value},
       getServico(event.target.value),
       
       getPrestador(event.target.value,'',UsuarioLogado._id)
    ]
}

export const changeServico = event => {
    return  [
        {type: 'SERVICO_CHANGED',payload: event.target.value},
 
        getPrestador('',event.target.value)
     ]
  
 
}

export function getProfissao(profissao='',servico='') {
    
    const request = axios.get(`${BASE_URL}/profissao`)
    return {
        type: 'BUSCA_PROFISSAO_FETCHED',
        payload: request
    }
}


export function getServico(profissao='') {
    let url 
  
if (profissao==''){url='servico'} else {url=`servicoBusca/${profissao}`}

    const request = axios.get(`${BASE_URL}/${url}`)
    return {
        type: 'BUSCA_SERVICO_FETCHED',
        payload: request
    }
}

export function getPrestador(profissao='',servico='',usu='') {
    let url 

     if((profissao=='')&& (servico=='')){
        url='usuario'
     }

     if (profissao!=''){
        url=`prestadorProfissao/${profissao}/${usu}`
     }
     if (servico!=''){
        url=`prestadorServico/${servico}`  
     }

   
    const request = axios.get(`${BASE_URL}/${url}`)
    return {
        type: 'BUSCA_PRESTADOR_FETCHED',
        payload: request
    }
}

export function Prestadorsolicitacao(prestador){
    return {
        type: 'SOLICITACAO_PRESTADOR_FETCHED',
        payload: prestador}
    }

export function solicitacao(prestador){
    Prestadorsolicitacao(prestador)
    return [{ type: 'SOLICITACAO_PRESTADOR_FETCHED',
    payload: prestador},dispatch => {  dispatch(window.location.replace("/#/solicitacao/"))}]
    
}

export function init() {
    return[
        showTabs('tabBuscar'),
        selectTab('tabBuscar'),


        getProfissao(),
       getServico(),
       getPrestador()
  
        
      ]
}