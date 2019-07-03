import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Grafico from './dashGrafico'
import axios from 'axios'

import {visualizar} from '../solicitacao/solicitacaoActions'
import Status from '../solicitacao/status'
 class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

    }
    componentWillMount() {
        const URL = 'http://localhost:3004/api/solicitacao'
      
            axios.get(URL)
                .then(resp => this.setState({...this.state,list: resp.data}))
       
    }
renderRow(){
    return this.state.list.map(res=>(
        <tr key={res._id}>
        <td>
          
                       <button className='btn btn-success' onClick={() => this.props.visualizar(res)}>
                        <i className='fa fa-cart-arrow-down'> </i> {res._id.slice(1,8).toUpperCase()} </button>
      </td>
        <td>
        <ul className="users-list clearfix">
                    <li>
                    
                      <a class="users-list-name" href="#"> {res.tomador[0].nome} </a>
              
                    </li>
              
                  </ul>
            </td>
        <td>
          {res.servico[0].descricao}
        </td>
        <td><Status status={res.status} /></td>
       
      </tr>
    ))
}
    
    render() {
        
        return (
            <div>        
            <ContentHeader title='Painel' small='Prestador' />
            <Content>
            <div className="box box-info">
            <div className="box-header with-border">
              <h3 className="box-title">Ultimos Pedidos</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
         
            <div className="box-body" >
              <div className="table-responsive">
              <table className="table no-margin">
                  <thead>
                  <tr>
                    <th>Nº do Pedido</th>
                    <th>Solicitante</th>
                    <th>Serviço</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
         
                  
                 {this.renderRow()}
                  </tbody>
                </table>
              </div>
   
            </div>
     
            <div className="box-footer clearfix" >
              <a href="javascript:void(0)" className="btn btn-sm btn-info btn-flat pull-left">Ver Todos</a>
             </div>
        
          </div>
     
     </Content>
          </div>

        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({visualizar}, dispatch)
export default connect(null, mapDispatchToProps)(Dashboard)
