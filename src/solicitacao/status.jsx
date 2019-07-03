

import React, { Component } from 'react'

export default class Status extends Component {

    render() {
        
      console.log(this.props.status)

            switch (this.props.status) {
                case '0': return <span className="label label-success"> Aberta</span>
                    case '1': return <span className="label label-warning"> Aprovação Visita</span>
                    case '2': return  <span className="label label-success"> Orçamento</span>
                    case '3': return  <span className="label label-warning"> Aprovação Orçamento</span>
                    case '4': return <span className="label label-success">  Execução </span>
                    case '5': return <span className="label label-warning">  Concluido </span>
                    case '6': return <span className="label label-warning">  Avaliado </span>
                    case '7': return <span className="label label-danger"> Disputa </span>
                    case '8': return <span className="label label-danger"> Cancelado </span>
                default: return <span className="label label-success"> Aberta</span>
            }
        
    }
}