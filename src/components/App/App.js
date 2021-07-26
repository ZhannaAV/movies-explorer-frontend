import './App.css';
import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/'>
                    <Main/>
                </Route>
                <Route path='/signup'>
                    <Register/>
                </Route>
                <Route path='/signin'>
                    <Login/>
                </Route>
                <Route path='/profile'>
                    <Profile/>
                </Route>
                <Route path='/movies'>
                    <Movies/>
                </Route>
                <Route path='/saved-movies'>
                    <SavedMovies/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
