import React from "react";
import './Profile.css'
import Header from "../Header/Header";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {ERROR_DATA_CHANGE_MESSAGE, SUCCESS_DATA_SEARCH_MESSAGE} from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

function Profile({onSignOut, onUpdateUser}) {
    const userContext = React.useContext(CurrentUserContext)
    const {currentUser} = userContext


    const [isLoader, setIsLoader] = React.useState(false);
    const [nameInputValue, setNameInputValue] = React.useState(currentUser.name)
    const [emailInputValue, setEmailInputValue] = React.useState(currentUser.email)
    const [isDisableChange, setIsDisableChange] = React.useState(true)
    const [profileMessage, setProfileMessage] = React.useState('')


    React.useEffect(() => {
        setNameInputValue(currentUser.name)
        setEmailInputValue(currentUser.email)
        setIsDisableChange(true)
    }, [currentUser])


    function handleChangeName(e) {
        setNameInputValue(e.target.value)
    }

    function handleChangeEmail(e) {
        setEmailInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsLoader(true)
        onUpdateUser(nameInputValue, emailInputValue)
            .then(()=> setProfileMessage(SUCCESS_DATA_SEARCH_MESSAGE))
            .catch(err => {
                setNameInputValue(currentUser.name)
                setEmailInputValue(currentUser.email)
                setIsDisableChange(true)
                setProfileMessage(ERROR_DATA_CHANGE_MESSAGE)
                console.log(err)
            })
            .finally(() => setIsLoader(false))
    }



    // проверяет изменилось ли значение поля, чтобы оживить кнопку
    React.useEffect(() => {
        setProfileMessage('')
        if (nameInputValue === currentUser.name && emailInputValue === currentUser.email) {
            setIsDisableChange(true)
        } else {
            setIsDisableChange(false)
        }
    }, [nameInputValue, emailInputValue])


    return (
        <>
            <Header/>
            {isLoader ? <Preloader/> : (
                <form className='profile' onSubmit={handleSubmit}>
                    <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                    <fieldset className="profile__info">
                        <input type="text" name="user-name" className="profile__input" value={nameInputValue}
                               onChange={handleChangeName}/>
                        <input type="text" name="user-email" className="profile__input" value={emailInputValue}
                               onChange={handleChangeEmail}/>
                    </fieldset>
                    <p className="profile__message">{profileMessage}</p>
                    <div className="profile__buttons">
                        <button type="submit" className="profile__btn"
                                disabled={isDisableChange}>Редактировать
                        </button>
                        <button type="button" className="profile__btn profile__btn_style_red"
                                onClick={onSignOut}>Выйти из аккаунта
                        </button>
                    </div>
                </form>
            )}
        </>
    )
}

export default Profile