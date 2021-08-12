import './App.css';
import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {SignContext} from "../../contexts/SignContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
    const [isLoader, setIsLoader] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({email: '', name: ''})
    const [loggedIn, setLoggedIn] = React.useState(Boolean(localStorage.getItem('token')))//статус авторизации

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const name = localStorage.getItem('name')
            const email = localStorage.getItem('email')
            setCurrentUser({email: email, name: name})
        }
    }, [])


    return (
        <SignContext.Provider value={{loggedIn, setLoggedIn}}>
            <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
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
                        <ProtectedRoute path='/profile' component={Profile}/>
                        <ProtectedRoute path='/movies' component={Movies} isLoader={isLoader}
                                        setIsLoader={setIsLoader}/>
                        <ProtectedRoute path='/saved-movies' component={SavedMovies}
                                        isLoader={isLoader} setIsLoader={setIsLoader}/>
                        <Route path='/*'>
                            <PageNotFound/>
                        </Route>
                    </Switch>
                </div>
            </CurrentUserContext.Provider>
        </SignContext.Provider>
    );
}

export default App;
