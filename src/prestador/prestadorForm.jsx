import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init,getListServico} from './prestadorActions'

import LabelAndInput from '../common/form/labelAndInput'
import Select from '../common/form/select'


import Servicos from './servicos'


class PrestadorForm extends Component {

    componentWillMount() {
        this.props.getListServico()
    }
    render() {

        const { handleSubmit, readOnly,listServ,servicos } = this.props
      
const ufs=[{_id:'SP',descricao:"SÂO Paulo"},{_id:'RJ',descricao:"Rio de Janeiro"}]
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' type="text"  component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 12' placeholder='Informe o Nome' />
                    <Field name='cpf' type="text"  component={LabelAndInput} readOnly={readOnly}
                        label='CPF' cols='12 12' placeholder='Informe o CPF' />
                        <Field name='logradouro' type="text"  component={LabelAndInput} readOnly={readOnly}
                            label='Logradouro' cols='12 12' placeholder='Informe o Endereço' />
                            <Field name='numero' type="number"  component={LabelAndInput} readOnly={readOnly}
                            label='nº' cols='12 12' placeholder='Informe o Numero ' />
                            <Field name='cep' type="text"  component={LabelAndInput} readOnly={readOnly}
                            label='CEP' cols='12 12' placeholder='Informe o CEP ' />
                            <Field name='bairro' type="text"  component={LabelAndInput} readOnly={readOnly}
                            label='Bairro' cols='12 12' placeholder='Informe o Bairro ' />
                            <Field name='municipio' type="text"  component={LabelAndInput} readOnly={readOnly}
                            label='Cidade' cols='12 12' placeholder='Informe a Cidade ' />
                              <Field name='estado' type="select"  component={Select} list={ufs} readOnly={readOnly}
                            label='Estado' cols='12 12' />
                                <Field name='email' type="text"  component={LabelAndInput}  readOnly={readOnly}
                            label='Email' cols='12 12' />

                                 <Field name='telefone' type="text"  component={LabelAndInput}  readOnly={readOnly}
                            label='Telefone' cols='12 12' />
                            <Field name='senha' type="password"  component={LabelAndInput}  readOnly={readOnly}
                            label='Senha' cols='12 12' />

   <Field name='descricao' type="textarea"  component={LabelAndInput}  readOnly={readOnly}
                            label='Descrição' cols='12 12' />
                          
                      


                    <Servicos cols='12 12' listCampo={listServ} list={servicos} readOnly={readOnly}
                        field='prestador[0].servicos' legend='Campos' />
                   
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

PrestadorForm = reduxForm({form: 'prestadorForm', destroyOnUnmount: false})(PrestadorForm)
const selector = formValueSelector('prestadorForm')
const mapStateToProps = state => ({
    servicos: selector(state, 'prestador[0].servicos'),
    listServ:state.prestador.listServ
    
})
const mapDispatchToProps = dispatch => bindActionCreators({init,getListServico}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PrestadorForm)