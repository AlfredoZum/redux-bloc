import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './menu';
import Users from './users/index';

const Task = () => <div>Tareas</div>

const App = () => (
  <BrowserRouter>
    <Menu />
    <Route exact path='/' component={ Users } />
    <Route exact path='/task' component={ Task }  />
  </BrowserRouter>
);

export default App;
