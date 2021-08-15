import React from "react";
import './Register.css'
import Header from "../Header/Header";
import SignForm from "../SignForm/SignForm";
import SignInput from "../SignInput/SignInput";
import Preloader from "../Preloader/Preloader";


function Register({onRegister}) {

    const [isLoader, setIsLoader] = React.useState(false);
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isError, setIsError] = React.useState(false)
    const [validationErrors, setValidationErrors] = React.useState({})
    const [isValid, setIsValid] = React.useState(false)


    function handleRegister(e) {
        e.preventDefault()
        setIsLoader(true)
        onRegister(name, email, password)
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
                <SignForm title='Добро пожаловать!' submitBtnText='Зарегистрироваться'
                          text='Уже зарегистрированы?' textLink='Войти' linkTo='/signin'
                          handleSubmit={handleRegister} isError={isError} isDisabled={!isValid}>
                    <SignInput id="signup-name" type="text" name="name" label="Имя"
                               inputValue={name}
                               setValue={setName} setError={setValidationErrors} minlength="2"
                               maxlength="30" errors={validationErrors} setIsValid={setIsValid}/>
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

export default Register