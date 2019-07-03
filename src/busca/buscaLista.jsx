import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StarRatings from 'react-star-ratings';

import{solicitacao} from './buscaActions'
class BuscaLista extends Component {

   

    renderRows() {
        const listaPrestador = this.props.listaPrestador || []
        return listaPrestador.map(ds => (
            <tr key={ds._id}>
                <td><img width="100"  className="rounded-circle" src="https://s3.amazonaws.com/igd-wp-uploads-pluginaws/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg" alt=""/>
                {ds.nome}<br/>
                <StarRatings
          rating={Math.floor(Math.random() * 5)}
          starRatedColor="yellow"
          starDimension="30px"
        starSpacing="1px"
          numberOfStars={5}
          name='Avaliação'
        />
                </td>
                <td>{`${ds.municipio} - ${ds.estado}`}</td>
                <td>2 Km</td>
          <td> <button type='button' className='btn  btn-success'
                        onClick={()=>this.props.solicitacao(ds)}>Solicitar</button></td>
           
                
          
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cidade</th>
                            <th>KM</th>
                            <th>Visualizar</th>
                           
                      
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({listaPrestador: state.busca.listaPrestador})
const mapDispatchToProps = dispatch => bindActionCreators({solicitacao},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BuscaLista)