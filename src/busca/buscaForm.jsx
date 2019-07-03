import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



import Select from '../common/form/selectBusca'

import {changeProfissao,changeServico} from './buscaActions'

class BuscaForm extends Component {


    render() {

        const { listaProfissao, listaServicos,usuarioLogado } = this.props

        return (
  
                <div className='box-body'>
                 <Select name='profissao' type="select" onChange={this.props.changeProfissao} list={listaProfissao}  label='Profissional (Área técnica ou Atividade)' cols='12 12'
     />
 <Select name='servicos' type="select" onChange={this.props.changeServico} list={listaServicos}  label='Serviços (informe a sua Necessidade)' cols='12 12'
     />
                       
                        

                    
                   
                </div>
           
           
        )
    }
}


const mapStateToProps = state => ({usuarioLogado:state.auth.user,listaProfissao: state.busca.listaProfissao,listaServicos: state.busca.listaServicos})
const mapDispatchToProps = dispatch => bindActionCreators({changeProfissao,changeServico}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BuscaForm)