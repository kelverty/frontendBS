import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import {Aprovar} from './solicitacaoActions'

//import LabelAndInput from '../common/form/labelAndInput'
import Grid from '../common/layout/grid'

//import Sinonimos from './sinonimos'


class VisitaTomador extends Component {

    render() {
  
        const { solicitacao} = this.props
        const [visita] = solicitacao.visita

     
        return (
     
            <div className='box-body'>
            <h1>Dados da Visita</h1>
                <Grid cols='6 5'>
              <h1>{visita.titulo}</h1>
              <p><b>Descricao: </b>{visita.descricao}</p>
              <p><b>Valor: </b>R$ {visita.valor}</p>
              <button className='btn btn-success' onClick={()=>this.props.Aprovar(solicitacao,2)}>
                        <i className='fa fa-check'> Aprova</i>
                    </button>
                    <button className='btn btn-danger' onClick={()=>this.props.Aprovar(solicitacao,8)}>
                        <i className='fa fa-close'>  Rejeitar</i>
                    </button>
                </Grid>
               
        </div>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({Aprovar}, dispatch)
export default connect(null, mapDispatchToProps)(VisitaTomador)