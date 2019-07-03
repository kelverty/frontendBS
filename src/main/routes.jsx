import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import DashboardTomador from '../dashboard/dashboardTomador'
import Profissao from '../profissao/profissao'
import Campo from '../campo/campo'
import Formulario from '../formulario/formulario'
import Servico from '../servico/servico'
import Prestador from '../prestador/Prestador'
import Busca from '../busca/busca'
import Solicitacao from '../solicitacao/Solicitacao'
import VisualizaSolicitacao from '../solicitacao/visualizarSolicitacao'
import visualizarTomador from '../solicitacao/visualizarTomador'
export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={DashboardTomador} />
            {/* rotas Usuario */}
            <Route path='busca' component={Busca} />
            <Route path='solicitacao' component={Solicitacao} />
            <Route path='visualizarSolicitacao' component={VisualizaSolicitacao} />
            <Route path='visualizarTomador' component={visualizarTomador} />
            <Route path='tomador' component={DashboardTomador} />
            <Route path='dashboard' component={Dashboard} />
            {/* rota Administrativas */}
            <Route path='profissao' component={Profissao} />
            <Route path='campo' component={Campo} />
            <Route path='formulario' component={Formulario} />
            <Route path='servico' component={Servico} />
            <Route path='prestador' component={Prestador} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)