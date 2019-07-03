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
import { submitAvaliacao,init,create,submitVisita,submitOrcamento} from './solicitacaoActions'
import DadosTomador from './dadosTomador'
import VisitaTomador from './visitaTomador'
import OrcamentoTomador from './orcamentoTomador'
import Avaliacao from './avaliacao'
 class VisualizarTomador extends Component {

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
                            <TabHeader label='Passo 1 (Resumo)' icon='bars' target='tabResumo' />
                            <TabHeader label='Passo2 (Aprovar Visita)' icon='plus' target='tabApVisita' />
                            <TabHeader label='Passo 3 (Aprovar Orçamento)' icon='check-square' target='tabApOrca' />
                            <TabHeader label='Passo 4 (Avaliar Serviço)' icon='check-square' target='tabAva' />
                            
                        </TabsHeader> 
                        <TabsContent> 
                          
                            



                            <TabContent id='tabResumo'>
                            
                            <DadosTomador solicitacao={this.props.solicitacao}/>

                            </TabContent>
                            <TabContent id='tabApVisita'>
                            
                            <VisitaTomador solicitacao={this.props.solicitacao}/>
                            </TabContent>
                            <TabContent id='tabApOrca'>
                            <OrcamentoTomador solicitacao={this.props.solicitacao}/>
                         
                            </TabContent>
                            <TabContent id='tabAva'>
                       <Avaliacao solicitacao={this.props.solicitacao} onSubmit={this.props.submitAvaliacao}
                                    submitLabel='Avaliar' submitClass='primary' />
                         
                            </TabContent>
                       
                       
                        </TabsContent> 
                    </Tabs>
                </Content> 
            </div>
        )
    }
}
const mapStateToProps = state => ({solicitacao: state.solicitacao.servicoVisu})
const mapDispatchToProps = dispatch => bindActionCreators({submitAvaliacao,init,create,submitVisita,submitOrcamento}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(VisualizarTomador)