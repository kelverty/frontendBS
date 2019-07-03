import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init} from './campoActions'

import LabelAndInput from '../common/form/labelAndInput'
import Select from '../common/form/select'


import ValoresLista from './valoresLista'


class CampoForm extends Component {


    render() {
  
        const { handleSubmit, readOnly,valoresLista } = this.props
  
const listaTipo=[{_id:'text',descricao:"Texto"},{_id:'select',descricao:"Lista de Seleção"}]
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='descricao' type="text"  component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 12' placeholder='Informe valor para o tipo Item' />
                          
                        <Field  name='tipo' cols='12 12' list={listaTipo} component={Select} readOnly={readOnly}
                        field='valoresLista'  label='Tipo' legend='Valores Lista' />


                    <ValoresLista cols='12 12' list={valoresLista} readOnly={readOnly}
                        field='valoresLista' legend='Valores Lista' />
                   
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

CampoForm = reduxForm({form: 'campoForm', destroyOnUnmount: false})(CampoForm)
const selector = formValueSelector('campoForm')
const mapStateToProps = state => ({
   
    valoresLista: selector(state, 'valoresLista')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CampoForm)