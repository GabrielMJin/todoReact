import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Todo from './pages/Todo';
import User from './pages/User';

const routes = [{
  component: Home,
  name: 'Home',
  path: '/',
}, {
  component: Todo,
  name: 'Todo',
  path: '/todo',
},
{
  component: User,
  name: 'Formulário',
  path: '/create',
},
];

const Routes = () => (
  <BrowserRouter>
    <Navbar title="Pitang" routes={routes} />
    <Switch>
      {routes.map(({ path, component }) => (
        <Route exact key={path} path={path} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
