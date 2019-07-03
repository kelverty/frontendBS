import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import {showVisita,showOrcamento,Aprovar} from './solicitacaoActions'


import Grid from '../common/layout/grid'




class DadosSolicitacao extends Component {
visita(){
    const { solicitacao} = this.props
    if (solicitacao.status==0){
return(   
    <div> 
<h4 className="list-group-item-heading"><b>Visita:</b> Aguardando Envio
</h4>
<p className="list-group-item-text">
<button className='btn btn-success' onClick={()=>this.props.showVisita(solicitacao)}>
                        <i className='fa fa-car'> Enviar Visita</i>
                    </button>

</p>
</div>
)
    }

    if (solicitacao.status==1){
        return(   
            <div> 
        <h4 className="list-group-item-heading"><b>Visita:</b> Aguardando Aprovação
        </h4>
        <p className="list-group-item-text">
       
        
        </p>
        </div>
        )
            }
            if (solicitacao.status>=2){
                return(   
                    <div> 
                <h4 className="list-group-item-heading"><b>Visita:</b> Aprovada
                </h4>
                <p className="list-group-item-text">
             
                
                </p>
                </div>
                )
                    }
}
orcamento(){
    const { solicitacao} = this.props
    if ((solicitacao.status==0)||(solicitacao.status==2)){
return(   
    <div> 
<h4 className="list-group-item-heading"><b>Orçamento:</b> Aguardando Envio
</h4>
<p className="list-group-item-text">
<button className='btn btn-success' onClick={()=>this.props.showOrcamento(solicitacao)}>
                        <i className='fa fa-car'> Enviar Orçamento</i>
                    </button>

</p>
</div>
)
    }

    if (solicitacao.status==3){
        return(   
            <div> 
        <h4 className="list-group-item-heading"><b>Orçamento:</b> Aguardando Aprovação
        </h4>
        <p className="list-group-item-text">
       
        
        </p>
        </div>
        )
            }
            if (solicitacao.status>=4){
                return(   
                    <div> 
                <h4 className="list-group-item-heading"><b>Orçamento:</b> Aprovada
                </h4>
                <p className="list-group-item-text">
             
                
                </p>
                </div>
                )
                    }
}
execucao(){
    
    const { solicitacao} = this.props
    if (solicitacao.status==4){
return(   
    <div> 
<h4 className="list-group-item-heading"><b>Execução:</b> Liberada
</h4>
<p className="list-group-item-text">
<button className='btn btn-success' onClick={()=>this.props.Aprovar(solicitacao,5)}>
                        <i className='fa fa-check'> Concluir</i>
                    </button>

</p>
</div>
)
    }

    if (solicitacao.status==5){
        return(   
            <div> 
        <h4 className="list-group-item-heading"><b>Execução:</b> Aguardando Aprovação
        </h4>
        <p className="list-group-item-text">
       
        
        </p>
        </div>
        )
            }
            if (solicitacao.status>5){
                return(   
                    <div> 
                <h4 className="list-group-item-heading"><b>Execução:</b> Finalizada
                </h4>
                <p className="list-group-item-text">
             
                
                </p>
                </div>
                )
                    }
                    if (solicitacao.status==8){
                        return(   
                            <div> 
                        <h4 className="list-group-item-heading"><b>Cacelado :</b> 
                        </h4>
                        <p className="list-group-item-text">
                     
                        
                        </p>
                        </div>
                        )
                            }
}
    renderRow(){
        const { solicitacao} = this.props
        const [tomador] = solicitacao.tomador
        const [servico] = solicitacao.servico
        const[formulario]= servico.formulario

     let cam = formulario.campos.map(resul=>(resul))
    return cam.map((result,index)=>(
       
       <p><b>{result.descricao}: </b>{result.resposta} </p>
    )
    
    )
    }



    render() {
  
        const { solicitacao} = this.props
        const [tomador] = solicitacao.tomador
        const [servico] = solicitacao.servico
        
      
     
        return (
     
            <div className='box-body'>
                <Grid cols='6 5'><img   className="rounded-circle img-responsive" src="https://s3.amazonaws.com/igd-wp-uploads-pluginaws/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg" alt=""/>
                <h3>{tomador.nome}</h3>
               <p><b>Endereço: </b>{`${tomador.logradouro},${tomador.numero }`}</p>
               <p>{`${tomador.cep},${tomador.municipio } - ${tomador.bairro }/ ${tomador.estado } `}</p>
           
                    
                </Grid>
                <Grid cols='6 4'><h3> <b>Servico:</b> {servico.descricao}</h3>
                {this.renderRow()} 
                </Grid>
                <Grid cols='6 3'>
                <div className="list-group">
  <a href="#" className="list-group-item active">
    <h4 className="list-group-item-heading">Etapa da Solicitação</h4>
    <p className="list-group-item-text"></p>
  </a>
  <a className="list-group-item" onClick={()=>this.props.showVisita(solicitacao)}>
{this.visita()}

    
  </a>
  <a className="list-group-item" onClick={()=>this.props.showOrcamento(solicitacao)}>
    {this.orcamento()}

    
  </a>
  <a className="list-group-item" >
{this.execucao()}

    
  </a>
</div>
                </Grid>

               
        </div>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({showVisita,showOrcamento,Aprovar}, dispatch)
export default connect(null, mapDispatchToProps)(DadosSolicitacao)