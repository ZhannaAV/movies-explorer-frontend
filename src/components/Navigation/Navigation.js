import './Navigation.css'
import {Link, useLocation} from "react-router-dom";

function Navigation() {
    const {pathname} = useLocation()
    const whiteList = ['/profile', '/movies', '/saved-movies']

    return (
        <>
            {pathname === '/' && (
                <nav className="navigation">
                    <Link/>
                    <Link className='navigation__link-signup' to='/signup'>
                        Регистрация
                    </Link>
                    <Link className='navigation__link-signin' to='/signin'>
                        <button className="navigation__signin-btn" type='button'>
                            Войти
                        </button>
                    </Link>
                </nav>
            )}
            {whiteList.some((i) => i === pathname) && (
                <div className="navigation">
                    <Link className='navigation__link-film navigation__link-film_weight_semi-bold'
                          to='/signup'>
                        Фильмы
                    </Link>
                    <Link className='navigation__link-film' to='/signup'>
                        Сохранённые фильмы
                    </Link>
                    <Link className='navigation__link-profile' to='/profile'>
                        Аккаунт
                        <div className="profile-icon"/>
                    </Link>
                </div>
            )}
        </>
    )
}

export default Navigation