import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init} from './solicitacaoActions'
import StarRatings from 'react-star-ratings';
import LabelAndInput from '../common/form/labelAndInput'
import Select from '../common/form/select'





class AvaliacaoForm extends Component {
    changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
       
      }
    render() {
  
        const { handleSubmit, readOnly } = this.props
  
return (
    
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                <img src="http://lorempixel.com/200/200/people"
 alt="User Image" />
 <br/>
            <Field name='prestador[0].avaliacoes[0].avaliacao' id="avaliacao"  component='input' type='hidden' readOnly={readOnly} label='Parametros' cols='12 12' />
            <StarRatings
            rating={0}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={6}
          name='rating'
        />
                    <Field name='prestador[0].avaliacoes[0].descricao' type="text"  component={LabelAndInput} readOnly={readOnly}
                        label='Descreva como foi o Serviço' cols='12 12' placeholder='Descreva Serviço ' />
                          
                             


                   
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

AvaliacaoForm = reduxForm({form: 'avaliacaoForm', destroyOnUnmount: false})(AvaliacaoForm)
const selector = formValueSelector('avaliacaoForm')

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(AvaliacaoForm)