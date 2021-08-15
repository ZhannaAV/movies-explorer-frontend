import './App.css';
import React, {useEffect} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
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
import ProtectedRouteAfterSign from "../ProtectedRouteAfterSign/ProtectedRouteAfterSign";
import mainApi from "../../utils/MainApi";

function App() {
    const [currentUser, setCurrentUser] = React.useState({email: '', name: ''})
    const [loggedIn, setLoggedIn] = React.useState(Boolean(localStorage.getItem('token')))//статус авторизации

    const history = useHistory()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            mainApi.getMe()
                .then(res => {
                    setLoggedIn(true)
                    setCurrentUser({email: res.email, name: res.name})
                })
                .catch((err) => {
                    console.log(err)
                    setLoggedIn(false)
                    localStorage.setItem('token', '')
                })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('name', currentUser.name)
        localStorage.setItem('email', currentUser.email)
    }, [currentUser])

    function register(name, email, password) {
      return mainApi.register(name,email,password)
            .then(() => {
               return login(email,password)
            })
    }

    function login(email, password) {
     return mainApi.authorize(email, password)
            .then(res => {
                localStorage.setItem('token', res.token)
                mainApi.getMe()
                    .then(res => {
                        setLoggedIn(true)
                        setCurrentUser({email: res.email, name: res.name})
                        history.push("/movies")
                    })
            })
    }

    function updateUser(name, email){
        return mainApi.changeInfoProfile(name, email)
            .then(res => setCurrentUser({email: res.email, name: res.name}))
    }


    function handleSignOut() {
        setLoggedIn(false)
        setCurrentUser({email: '', name: ''})
        localStorage.setItem('token', '');
        history.push("/")
    }


    return (
        <SignContext.Provider value={{loggedIn, setLoggedIn}}>
            <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
                <div className="App">
                    <Switch>
                        <Route exact path='/'>
                            <Main/>
                        </Route>
                        <ProtectedRouteAfterSign path='/signup' component={Register} onRegister={register}/>
                        <ProtectedRouteAfterSign path='/signin' component={Login} onLogin={login}/>
                        <ProtectedRoute path='/profile' component={Profile} onSignOut={handleSignOut} onUpdateUser={updateUser}/>
                        <ProtectedRoute path='/movies' component={Movies}/>
                        <ProtectedRoute path='/saved-movies' component={SavedMovies}/>
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
