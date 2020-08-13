import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {Login} from './pages/login.page';
import {X} from './pages/X.page'

function App() {
    const juzer = localStorage.getItem('juzer')
    if(juzer) {
        return (
            <X/>
        )
    }
  return (
    <BrowserRouter>
        <Switch>
            <Route path={'/'} exact>
                <Login/>
            </Route>
            <Route path={'/X'} exact>
                <X/>
            </Route>
        </Switch>
    </BrowserRouter>
      );
}

export default App;
