import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/container/Main";
import Forecast from './components/forecast/forecast';
import './App.css';


const App = () => {

    ////////////////////////////////////////////////////////////////
    // Display html
    ////////////////////////////////////////////////////////////////
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route path="/forecast/:city" component={Forecast}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
