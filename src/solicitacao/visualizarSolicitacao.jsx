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
import If from '../common/operator/if'
import { init,create,submitVisita,submitOrcamento} from './solicitacaoActions'
import DadosSolicitacao from './dadosSolicitacao'
import Visita from './visita'
import Orcamento from './orcamento'

 class SolicitacaoVisualizar extends Component {

    componentWillMount() {
       // this.props.init()
    }

    render() {
   


        return (
            <div> 
                <ContentHeader title='Solicitação' small='' />
                <Content>
                <Tabs> 
                        <TabsHeader> 
                            <TabHeader label='Passo 1 (Identificação)' icon='bars' target='tabResumo' />
                            <TabHeader label='Passo2 (Visita)' icon='plus' target='tabVisita' />
                            <TabHeader label='Passo 3 (Orçamento)' icon='check-square' target='tabOrcamento' />
                            <TabHeader label='Passo 4 (Aprovação)' icon='check-square' target='tabAprovacao' />
                            
                        </TabsHeader> 
                        <TabsContent> 
                            <TabContent id='tabResumo'>
                      
                            <DadosSolicitacao solicitacao={this.props.solicitacao}/>
                            </TabContent>
                            <TabContent id='tabVisita'>
                            <If test={this.props.solicitacao.status==0}>
                            <Visita  onSubmit={this.props.submitVisita}
                                    submitLabel='Incluir Visita' submitClass='primary' />
                                    </If>
                                    <If test={this.props.solicitacao.status>0}>
                            <Visita  onSubmit={this.props.submitVisita}
                                    submitLabel='Incluir Visita' readOnly="true" submitClass='primary' />
                                    </If>

                            </TabContent>
                            <TabContent id='tabOrcamento'>
                            <If test={this.props.solicitacao.status<3}>
                            <Orcamento  onSubmit={this.props.submitOrcamento}
                                    submitLabel='Incluir orçamento' submitClass='primary' />
                            </If>
                            <If test={this.props.solicitacao.status>=3}>
                            <Orcamento  onSubmit={this.props.submitOrcamento}
                                    submitLabel='Incluir orçamento' readOnly="true" submitClass='primary' />
                            </If>
                          
                            </TabContent>
                            <TabContent id='tabAprovacao'>
                            <If test={this.props.solicitacao.status==4}>
                           <h1> Serviço Liberado</h1> 
                            </If>
                            <If test={this.props.solicitacao.status<4}>
                          <h3>Aguarde Aprovação</h3>
                           <p>Seu orçamento foi enviado para o cliente aguardando aprovação !!!</p>
                           </If>
                            </TabContent>
                       
                        </TabsContent> 
                    </Tabs>
                </Content> 
            </div>
        )
    }
}
const mapStateToProps = state => ({solicitacao: state.solicitacao.servicoVisu})
const mapDispatchToProps = dispatch => bindActionCreators({init,create,submitVisita,submitOrcamento}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SolicitacaoVisualizar)