import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init,getListCampo} from './formularioActions'

import LabelAndInput from '../common/form/labelAndInput'
import Select from '../common/form/select'


import Campos from './campos'


class FormularioForm extends Component {

    componentWillMount() {
        this.props.getListCampo()
    }
    render() {
  
        const { handleSubmit, readOnly,campos,listCampo } = this.props
  
const listaTipo=[{_id:'text',descricao:"Texto"},{_id:'select',descricao:"Lista de Seleção"}]
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='descricao' type="text"  component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 12' placeholder='Informe valor para o tipo Item' />
                          
                      


                    <Campos cols='12 12' listCampo={listCampo} list={campos} readOnly={readOnly}
                        field='campos' legend='Campos' />
                   
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

FormularioForm = reduxForm({form: 'formularioForm', destroyOnUnmount: false})(FormularioForm)
const selector = formValueSelector('formularioForm')
const mapStateToProps = state => ({
    listCampo:state.formulario.listCampo,
    campos: selector(state, 'campos')
})
const mapDispatchToProps = dispatch => bindActionCreators({init,getListCampo}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormularioForm)