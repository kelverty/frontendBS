import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import {initForm} from './solicitacaoActions'

import LabelAndInput from '../common/form/labelAndInput'
// import Select from '../common/form/select'




class SolicitacaoRegistro extends Component {

    componentWillMount() {
      
        const { servico, prestador } = this.props
       let  tomador=this.props.user
        const solicitacao={"status":0 ,"prestador":[prestador],"servico":[servico],"tomador":[tomador]}
       
       this.props.initForm(solicitacao)
    }
renderRow(){
    const {formulario} = this.props.servico
const [campos] = formulario
 let cam = campos.campos.map(resul=>(resul))
return cam.map((result,index)=>(
   
    <Field name={`servico[0].formulario[0].campos[${index}].resposta`} type="text"  component={LabelAndInput}  
    label={result.descricao} cols='12 12' /> 
)

)
}
    
    render() {
        const { servico, prestador } = this.props
        const { handleSubmit, readOnly } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                 {this.renderRow()} 
                   
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

SolicitacaoRegistro = reduxForm({form: 'solicitacaoForm', destroyOnUnmount: false})(SolicitacaoRegistro)
const selector = formValueSelector('SolicitacaoRegistro')
const mapStateToProps = state => ({

    user:state.auth.user,
    prestador:state.busca.prestador,
    servico:state.solicitacao.servico
    
})
const mapDispatchToProps = dispatch => bindActionCreators({initForm}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SolicitacaoRegistro)