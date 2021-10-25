import React from 'react';
import './Styles/App.css';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ShopProvider from './Components/Context';

import Main from './Pages/index';
import Store from './Pages/store';
import Product from './Pages/product';

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

const App = () => {
    return(
      <ShopProvider>
        <StyletronProvider value={engine} debug={debug} debugAfterHydration>
          <Router>

            <Route path="/store">
              <Store/>
            </Route>
            <Route exact path="/">
              <Main/>
            </Route>
          </Router>
        </StyletronProvider>
      </ShopProvider>
      
    );
}
export default App;

