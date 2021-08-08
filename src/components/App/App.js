import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
    const [isLoader, setIsLoader] = React.useState(false);

    return (
        <div className="App">
            <Switch>
                <Route exact path='/'>
                    <Main/>
                </Route>
                <Route exact path='/signup'>
                    <Register/>
                </Route>
                <Route exact path='/signin'>
                    <Login/>
                </Route>
                <Route exact path='/profile'>
                    <Profile/>
                </Route>
                <Route exact path='/movies'>
                    <Movies isLoader={isLoader} setIsLoader={setIsLoader}/>
                </Route>
                <Route exact path='/saved-movies'>
                    <SavedMovies/>
                </Route>
                <Route path='/*'>
                    <PageNotFound/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
