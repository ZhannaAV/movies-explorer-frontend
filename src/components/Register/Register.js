import React from "react";
import {useHistory} from 'react-router-dom';
import './Register.css'
import Header from "../Header/Header";
import SignForm from "../SignForm/SignForm";
import SignInput from "../SignInput/SignInput";
import mainApi from "../../utils/MainApi";
import {SignContext} from "../../contexts/SignContext";


function Register() {
    const logContext = React.useContext(SignContext)
    const {setLoggedIn} = logContext

    const history = useHistory()

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isError, setIsError] = React.useState(false)
    const [validationErrors, setValidationErrors] = React.useState({})
    const [isValid, setIsValid] = React.useState(false)


    function handleRegister(e) {
        e.preventDefault()
        console.log(name, email, password)
        mainApi.register(name,email,password)
            .then(res => {
                setIsError(false)
                setLoggedIn(true)
                history.push("/movies")
            })
            .catch(err => {
                console.log(err)
                setIsError(true)
            })
    }

    return (
        <>
            <Header/>
            <SignForm title='Добро пожаловать!' submitBtnText='Зарегистрироваться'
                      text='Уже зарегистрированы?' textLink='Войти' linkTo='/signin'
                      handleSubmit={handleRegister} isError={isError} isDisabled={!isValid}>
                <SignInput id="signup-name" type="text" name="name" label="Имя" inputValue={name}
                           setValue={setName} setError={setValidationErrors} minlength="2" maxlength="30" errors={validationErrors} setIsValid={setIsValid}/>
                <SignInput id="signup-email" type="email" name="email" label="E-mail"
                           inputValue={email} setValue={setEmail} setError={setValidationErrors} isRequired={true} errors={validationErrors} setIsValid={setIsValid}/>
                <SignInput id="signup-password" type="password" name="password" label="Пароль"
                           inputValue={password} setValue={setPassword} setError={setValidationErrors} isRequired={true} errors={validationErrors} setIsValid={setIsValid}/>
            </SignForm>
        </>
    )
}

export default Register