import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init,abrir,changeServico} from './solicitacaoActions'
//import { changeServico} from '../busca/buscaActions'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import Select  from '../common/form/selectValor'
import StarRatings from 'react-star-ratings';




class SolicitacaoAbertura extends Component {
  componentWillMount() {

}

    render() {
      
      const { prestador,servicoID } = this.props

    const servico = this.props.prestador.prestador || []

    const Prest = servico.map((valor,index) =>valor.servicos)
    const [servicos]=Prest
 
    const servicosFinal=servicos || []


        return (
<div>
    <Row>
        <Grid cols="6 4">
<img src="https://s3.amazonaws.com/igd-wp-uploads-pluginaws/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg" alt="" className="img-responsive"/>
<StarRatings className="ajusStar"
          rating={Math.floor(Math.random() * 5)}
          starRatedColor="yellow"
          starDimension="50px"
        starSpacing="5px"
          numberOfStars={5}
          name='Avaliação'
        />
        </Grid>
        <Grid cols="6 3">
        <p><b>Nome:</b> {prestador.nome}</p>
        <p>{prestador.descricao}</p></Grid>
        <Grid cols="12 5">

  <ol className="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>


  <div className="carousel-inner" role="listbox">
    <div className="item active">
      <img src="http://bs.i9pesquisaedesenvolvimento.com.br/img/slideExemplo/2.jpg" alt="..."/>
     
    </div>
    <div className="item">
      <img src="http://bs.i9pesquisaedesenvolvimento.com.br/img/slideExemplo/1.jpg" alt="..."/>
  
    </div>

  </div>


  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Anterior</span>
  </a>
  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Procimop</span>
  </a>

        </Grid>
    </Row>
    <Row>
      <br/>
      <br/>
      <Grid cols="12 12">
      <Select name='servicos' onChange={this.props.changeServico} valor={servicoID} type="select"  list={servicosFinal}  label='Serviço' cols='12 12'
     />
         <button className='btn btn-success' onClick={()=>this.props.abrir(servicoID)}>
                       Solicitar
                    </button>
      </Grid>
    </Row>

</div>
        )
    }
}

SolicitacaoAbertura = reduxForm({form: 'solicitacaoForm', destroyOnUnmount: false})(SolicitacaoAbertura)
const selector = formValueSelector('solicitacaoForm')
const mapStateToProps = state => ({
    prestador:state.busca.prestador,
    servicoID:state.solicitacao.servico._id
  
})
const mapDispatchToProps = dispatch => bindActionCreators({init,changeServico,abrir}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SolicitacaoAbertura)