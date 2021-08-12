import React from "react";
import './Profile.css'
import Header from "../Header/Header";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {SignContext} from "../../contexts/SignContext";
import mainApi from "../../utils/MainApi";
import {useHistory} from "react-router-dom";
import {ERROR_DATA_CHANGE_MESSAGE, SUCCESS_DATA_SEARCH_MESSAGE} from "../../utils/constants";

function Profile() {
    const userContext = React.useContext(CurrentUserContext)
    const {currentUser, setCurrentUser} = userContext

    const logContext = React.useContext(SignContext)
    const {setLoggedIn} = logContext

    const [name, setName] = React.useState(currentUser.name)
    const [email, setEmail] = React.useState(currentUser.email)
    const [isDisableChange, setIsDisableChange] = React.useState(true)
    const [profileMessage, setProfileMessage] = React.useState('')

    console.log(isDisableChange)
    const history = useHistory()

    React.useEffect(() => {
        setName(currentUser.name)
        setEmail(currentUser.email)
        setIsDisableChange(true)
    }, [currentUser])

    React.useEffect(() => {
        localStorage.setItem('name', currentUser.name)
        localStorage.setItem('email', currentUser.email)
    },[currentUser])


    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        mainApi.changeInfoProfile(name, email)
            .then(res => {
                setCurrentUser({email: res.email, name: res.name})
                setName(res.name)
                setEmail(res.email)
                setProfileMessage(SUCCESS_DATA_SEARCH_MESSAGE)
            })
            .catch(err => {
                setName(currentUser.name)
                setEmail(currentUser.email)
                setIsDisableChange(true)
                setProfileMessage(ERROR_DATA_CHANGE_MESSAGE)
                console.log(err)
            })
    }

    function handleSignOut() {
        setLoggedIn(false)
        setCurrentUser({email: '', name: ''})
        localStorage.setItem('token', '');
        history.push("/")
    }

    // проверяет изменилось ли значение поля, чтобы оживить кнопку
    React.useEffect(() => {
        if (name === currentUser.name && email === currentUser.email) {
            setIsDisableChange(true)
        } else {
            setIsDisableChange(false)
        }
    }, [name, email])


    return (
        <>
            <Header/>
            <form className='profile' onSubmit={handleSubmit}>
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                <fieldset className="profile__info">
                    <input type="text" name="user-name" className="profile__input" value={name}
                           onChange={handleChangeName}/>
                    <input type="text" name="user-email" className="profile__input" value={email}
                           onChange={handleChangeEmail}/>
                </fieldset>
                <p className="profile__message">{profileMessage}</p>
                <div className="profile__buttons">
                    <button type="submit" className="profile__btn"
                            disabled={isDisableChange}>Редактировать
                    </button>
                    <button type="button" className="profile__btn profile__btn_style_red"
                            onClick={handleSignOut}>Выйти из аккаунта
                    </button>
                </div>
            </form>
        </>
    )
}

export default Profile