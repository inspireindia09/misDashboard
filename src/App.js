import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './Componets/Login/Login';
import Home from './Componets/Home/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    )
  }
}
export default App;