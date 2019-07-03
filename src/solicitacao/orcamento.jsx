
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init} from './solicitacaoActions'

import LabelAndInput from '../common/form/labelAndInput'
import Select from '../common/form/select'





class OrcamentoForm extends Component {



    render() {
  
        const { handleSubmit, readOnly } = this.props
  
return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='orcamento[0].titulo' type="text"  component={LabelAndInput} readOnly={readOnly}
                        label='Titulo Orçamento' cols='12 12' placeholder='Informe um titulo ' />
                          
                          <Field name='orcamento[0].descricao' type="text"  component={LabelAndInput} readOnly={readOnly}
                        label='Descrição da Orçamento' cols='12 12' placeholder='descreva o  Orçamento' />
                              <Field name='orcamento[0].valor' type="text"  component={LabelAndInput} readOnly={readOnly}
                        label='Valor do Orçamento' cols='12 12' placeholder='Informe valor para a Orçamento' />
                             


                   
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

OrcamentoForm = reduxForm({form: 'orcamentoForm', destroyOnUnmount: false})(OrcamentoForm)
const selector = formValueSelector('orcamentoForm')

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(OrcamentoForm)