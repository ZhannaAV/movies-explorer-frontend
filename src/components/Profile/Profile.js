import './Profile.css'
import Header from "../Header/Header";

function Profile() {
    return (
        <>
            <Header/>
            <section className='profile'>
                <h2 className="profile__title">Привет, Виталий!</h2>
                <ul className="profile__info">
                    <li className="profile__item">
                        <p className="profile__item-name">Имя</p>
                        <p className="profile__item-value">Виталий</p>
                    </li>
                    <li className="profile__item">
                        <p className="profile__item-name">E-mail</p>
                        <p className="profile__item-value">name@email.ru</p>
                    </li>
                </ul>
                <div className="profile__buttons">
                    <button className="profile__btn">Редактировать</button>
                    <button className="profile__btn profile__btn_style_red">Выйти из аккаунта
                    </button>
                </div>
            </section>
        </>
    )
}

export default Profile