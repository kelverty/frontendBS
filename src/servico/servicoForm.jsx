import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init,getProfissao,getFormulario} from './servicoActions'

import LabelAndInput from '../common/form/labelAndInput'
import Select from '../common/form/select'





class ServicoForm extends Component {

    componentWillMount() {
        this.props.getProfissao()
        this.props.getFormulario()
    }

    render() {
  
        const { handleSubmit, readOnly,profissao,formulario } = this.props
  
const listaTipo=[{_id:'text',descricao:"Texto"},{_id:'select',descricao:"Lista de Seleção"}]
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='descricao' type="text"  component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 12' placeholder='Informe valor para o tipo Item' />
                          
                        <Field  name='formulario[0]_id' cols='12 12' list={formulario} component={Select} readOnly={readOnly}
                        field='formulario[0]_id'  label='Formulario' legend='Formulario' />
                        
                        <Field  name='profissao[0]._id' cols='12 12' list={profissao} component={Select} readOnly={readOnly}
                        field='profissao[0]_id'  label='Profissao' legend='Profissao' />


                   
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

ServicoForm = reduxForm({form: 'servicoForm', destroyOnUnmount: false})(ServicoForm)
const selector = formValueSelector('servicoForm')
const mapStateToProps = state => ({
    profissao: state.servico.listProf,
    formulario: state.servico.listForm,
    
})
const mapDispatchToProps = dispatch => bindActionCreators({init,getProfissao,getFormulario}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ServicoForm)