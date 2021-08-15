import React from "react";
import './Login.css'
import SignForm from "../SignForm/SignForm";
import Header from "../Header/Header";
import SignInput from "../SignInput/SignInput";
import Preloader from "../Preloader/Preloader";

function Login({onLogin}) {

    const [isLoader, setIsLoader] = React.useState(false);
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isError, setIsError] = React.useState(false)
    const [validationErrors, setValidationErrors] = React.useState({})
    const [isValid, setIsValid] = React.useState(false)

    function handleLogin(e) {
        e.preventDefault()
        setIsLoader(true)
        onLogin(email, password)
            .catch(err => {
                console.log(err)
                setIsError(true)
            })
            .finally(() => setIsLoader(false))
    }

    return (
        <>
            <Header/>
            {isLoader ? <Preloader/> : (
                <SignForm title='Рады видеть!' submitBtnText='Войти' linkTo='/signup'
                          text='Ещё не зарегистрированы?' textLink='Регистрация'
                          handleSubmit={handleLogin} isError={isError} isDisabled={!isValid}>
                    <SignInput id="signup-email" type="email" name="email" label="E-mail"
                               inputValue={email} setValue={setEmail} setError={setValidationErrors}
                               isRequired={true} errors={validationErrors} setIsValid={setIsValid}/>
                    <SignInput id="signup-password" type="password" name="password" label="Пароль"
                               inputValue={password} setValue={setPassword}
                               setError={setValidationErrors} isRequired={true}
                               errors={validationErrors} setIsValid={setIsValid}/>
                </SignForm>
            )}
        </>
    )
}

export default Login