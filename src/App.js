import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
/* import Wallet from './pages/Wallet'; */
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}
export default App;
// codigo inteiro baseado nos estudos da aluna Aline Eiko Hoshino e do Pedro Delicoli
