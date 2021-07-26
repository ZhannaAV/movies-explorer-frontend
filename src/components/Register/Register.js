import './Register.css'
import Header from "../Header/Header";
import SignForm from "../SignForm/SignForm";
import SignInput from "../SignInput/SignInput";

function Register() {
    return (
        <>
            <Header/>
            <SignForm title='Добро пожаловать!' submitBtnText='Зарегистрироваться' text='Уже зарегистрированы?' textLink='Войти' linkTo='/sign-in'>
            <SignInput id="signup-name" type="name" name="name" label="Имя"/>
            <SignInput id="signup-email" type="email" name="email" label="E-mail"/>
            <SignInput id="signup-password" type="password" name="password" label="Пароль"/>
            </SignForm>
        </>
    )
}

export default Register