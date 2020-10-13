import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./components/container/Main";
import Forecast from './components/forecast/forecast';
import './App.css';
import {ROUTES} from "./constants/config";


const App = () => {

    ////////////////////////////////////////////////////////////////
    // Display html
    ////////////////////////////////////////////////////////////////
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path={ROUTES.ROOT} component={Main} exact/>
                    <Route path={ROUTES.FORECAST} component={Forecast}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
