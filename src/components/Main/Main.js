import './Main.css';
import React from 'react';
import { Switch, Route } from 'react-router';
import AdminPage from '../AdminPage/AdminPage';
import LoginPage from '../LoginPage/LoginPage';
import Users from '../Users/Users';
import ChatServerManager from '../ChatServerManager/ChatServerManager';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          <Route path='/admin' component={AdminPage}/>
        </Switch>
      </main>
    );
  }
}
