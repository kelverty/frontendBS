import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init} from './profissaoActions'

import LabelAndInput from '../common/form/labelAndInput'


import Sinonimos from './sinonimos'


class ProfissaoForm extends Component {


    render() {
  
        const { handleSubmit, readOnly,sinonimos } = this.props
  

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='descricao' type="text"  component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 12' placeholder='Informe a Profissão' />
                        

                    <Sinonimos cols='12 12' list={sinonimos} readOnly={readOnly}
                        field='sinonimos' legend='Sinonimos' />
                   
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

ProfissaoForm = reduxForm({form: 'profissaoForm', destroyOnUnmount: false})(ProfissaoForm)
const selector = formValueSelector('profissaoForm')
const mapStateToProps = state => ({
    sinonimos: selector(state, 'sinonimos')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProfissaoForm)