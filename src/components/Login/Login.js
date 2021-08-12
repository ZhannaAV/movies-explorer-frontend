import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom';
import './Login.css'
import SignForm from "../SignForm/SignForm";
import Header from "../Header/Header";
import SignInput from "../SignInput/SignInput";
import {SignContext} from "../../contexts/SignContext";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";

function Login() {
    const logContext = React.useContext(SignContext)
    const {setLoggedIn} = logContext

    const userContext = React.useContext(CurrentUserContext)
    const {setCurrentUser, currentUser} = userContext

    const history = useHistory()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isError, setIsError] = React.useState(false)

    function handleLogin(e) {
        e.preventDefault()
        console.log(email, password)
        mainApi.authorize(email, password)
            .then(res => {
                localStorage.setItem('token', res.token)
                mainApi.getMe()
                    .then(res => {
                        console.log(res)
                        setLoggedIn(true)
                        setCurrentUser({email: res.email, name: res.name})
                        setIsError(false)
                        history.push("/movies")
                    })
                    .catch(err => {
                        console.log(err)
                        setIsError(true)
                    })
            })
    }

    useEffect(() => {
        localStorage.setItem('name', currentUser.name)
        localStorage.setItem('email', currentUser.email)
    },[currentUser])


    return (
        <>
            <Header/>
            <SignForm title='Рады видеть!' submitBtnText='Войти' linkTo='/signup'
                      text='Ещё не зарегистрированы?' textLink='Регистрация'
                      handleSubmit={handleLogin} isError={isError}>
                <SignInput id="signup-email" type="email" name="email" label="E-mail"
                           inputValue={email} setValue={setEmail}/>
                <SignInput id="signup-password" type="password" name="password" label="Пароль"
                           inputValue={password} setValue={setPassword}/>
            </SignForm>
        </>
    )
}

export default Login