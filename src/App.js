import React, { Component} from 'react';
import './Styles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import ShopProvider from './Components/Context';

import Main from './Pages/index';
import Store from './Pages/store';
// import Product from './Pages/product';
import Client from 'shopify-buy';

const client = Client.buildClient({
  storefrontAccessToken: '76075e096f7f7e0a8387f361d6aa44a5',
  domain: 'boulder-skin-collective.myshopify.com'
});

class App extends Component{

    render(){
      return(
        // <ShopProvider>
            <Router>
              <Route path="/store">
                <Store client={client}/>
              </Route>
              <Route exact path="/">
                <Main/>
              </Route>
            </Router>
        // </ShopProvider>
        
      );
    } 
}
export default App;

