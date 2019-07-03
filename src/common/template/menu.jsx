import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MenuItem from './menuItem'
import MenuTree from './menuTree'
class Menu  extends Component {
    render() {
        const { prestador } = this.props.user
        console.log(prestador)
if (prestador==undefined){
    

        return (
    <ul className='sidebar-menu'>
  
        <MenuItem path='tomador' label='Dashboard' icon='dashboard' />
        <MenuItem path='busca' label='Busca' icon='search' />

   
    </ul>
        )
    }else{
        return (
            <ul className='sidebar-menu'>
                <MenuItem path='dashboard' label='Dashboard' icon='dashboard' />
                <MenuItem path='tomador' label='Dashboard Tomador' icon='dashboard' />
                <MenuItem path='busca' label='Busca' icon='search' />
                <MenuTree label='Administrador' icon='edit'> 
                    <MenuItem path='profissao'
                        label='Profissão' icon='bar-chart' />
                          <MenuItem path='campo'
                        label='Campos' icon='bar-chart' />
                          <MenuItem path='formulario'
                        label='Formulario' icon='bar-chart' />
                        <MenuItem path='servico'
                        label='Serviços' icon='bar-chart' />
                        <MenuItem path='prestador'
                        label='Prestador' icon='bar-chart' />
                       
                </MenuTree>
           
            </ul>
                )   
    }
    
    }
}
const mapStateToProps = state => ({

    user:state.auth.user,
  
    
  })

  export default connect(mapStateToProps, null)(Menu)