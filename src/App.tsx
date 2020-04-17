import React from 'react';
import './App.css';
import {AiaraNavbar} from "./components/navbar/AiaraNavbar";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {ToDo} from "./components/ToDO/ToDo";

function App() {
    return (<div className="App">
            <AiaraNavbar/>
            <Switch>
                <Route path="/" exact={true}>
                    <ToDo/>
                </Route>
            </Switch>
        </div>);
}

export default App;
