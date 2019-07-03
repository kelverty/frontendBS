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

import { init,create} from './solicitacaoActions'

import Abertura from './SolicitacaoAbertura'
import Registro from './solicitacaoRegistro'

 class Solicitacao extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        
        return (
            <div> 
                <ContentHeader title='Solicitação' small='' />
                <Content>
                <Tabs> 
                        <TabsHeader> 
                            <TabHeader label='Passo 1 (Identificação)' icon='bars' target='tabAbertura' />
                            <TabHeader label='Passo2 (Solicitação)' icon='plus' target='tabSolicitacao' />
                            <TabHeader label='Passo 3 (Confirmação)' icon='check-square' target='tabConfirmacao' />
                            
                        </TabsHeader> 
                        <TabsContent> 
                            <TabContent id='tabAbertura'>
                                <Abertura />
                            </TabContent>
                            <TabContent id='tabSolicitacao'>
                    <Registro  onSubmit={this.props.create}
                                    submitLabel='Incluir' submitClass='primary'/>
                            </TabContent>
                            <TabContent id='tabConfirmacao'>
                          <h1>Solicitação Realizada com Sucesso </h1>
                          <p>Em breve você receberá um orçamento do Serviço ou Solicitação de Visita </p>
                          <p>Obrigado</p>
                            </TabContent>
                       
                        </TabsContent> 
                    </Tabs>
                </Content> 
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init,create}, dispatch)
export default connect(null, mapDispatchToProps)(Solicitacao)