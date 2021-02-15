import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import CreatePizza from './createPizza';
import 'bootstrap/dist/css/bootstrap.min.css';
import './public/style/App.css';
import { GlobalProvider } from './GlobalState';
import Pizzas from './pizzas';

export const ConfigContext = React.createContext();

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/createPizza" component={CreatePizza} />
          <Route path="/pizzas" component={Pizzas} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
