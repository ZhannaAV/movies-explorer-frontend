import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Main/>
                </Route>
                <Route path='/movies'>
                    <Movies/>
                </Route>
                <Route path='/movies'>
                    <SavedMovies/>
                </Route>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
