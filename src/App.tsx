import React from 'react';
import './App.css';
import {AiaraNavbar} from "./components/navbar/AiaraNavbar";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {ToDo} from "./components/ToDO/ToDo";
import {Weather} from "./components/weather/Weather";

function App() {
    return (<div className="App">
            <AiaraNavbar/>
            <Switch>
                <Route path="/" exact={true}>
                    <ToDo/>
                </Route>
                <Route path="/weather" exact={true}>
                    <Weather/>
                </Route>
            </Switch>
        </div>);
}

export default App;
