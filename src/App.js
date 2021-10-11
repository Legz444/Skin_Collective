import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Main from './Pages/index.jsx';

class App extends Component {
  render(){
    return(
      <Router>
       {/*All our Routes goes here!*/}
       <Route path="/" component={Main} />
      </Router>
    );
  }

}
export default App;

