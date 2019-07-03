import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

import { init} from './buscaActions'

import List from './buscaLista'
import Form from './buscaForm'
 class Busca extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        
        return (
            <div> 
            <ContentHeader title='Buscar' small='Serviços' />
            <Content>
            <Tabs> 
                    <TabsHeader> 
                        <TabHeader label='Buscar' icon='search' target='tabBuscar' />
                       
                    </TabsHeader> 
                    <TabsContent> 
                        <TabContent id='tabBuscar'>
                        <Form />
                            <List />
                        </TabContent>
                    
                    
                  
                    </TabsContent> 
                </Tabs>
            </Content> 
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(Busca)