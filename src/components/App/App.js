import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from "../Main/Main";
import Header from "../Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Main/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
