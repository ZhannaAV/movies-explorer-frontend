import './Login.css'
import SignForm from "../SignForm/SignForm";
import Header from "../Header/Header";
import SignInput from "../SignInput/SignInput";

function Login() {
    return (
        <>
            <Header/>
            <SignForm title='Рады видеть!' submitBtnText='Войти' linkTo='/signup' text='Ещё не зарегистрированы?' textLink='Регистрация'>
                <SignInput id="signup-email" type="email" name="email" label="E-mail"/>
                <SignInput id="signup-password" type="password" name="password" label="Пароль"/>
            </SignForm>
        </>
    )
}

export default Login