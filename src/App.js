import React, { Component } from 'react';
import './App.sass';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Detail from './components/Detail';
import Error from './components/Error';
import Navigation from './components/Navigation';

import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/create" component={Create}></Route>
              <Route path="/detail/:id" component={Detail}></Route>
              <Route component={Error}></Route>
            </Switch>
            
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
