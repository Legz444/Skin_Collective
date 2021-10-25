import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './Pages/index';
import Store from './Pages/store';

class App extends Component {
  render(){
    return(
      <Router>
       {/*All our Routes goes here!*/}
       <Route exact path="/" component={Main} />
       <Route path="/store" component={Store} />
      </Router>
    );
  }

}
export default App;

