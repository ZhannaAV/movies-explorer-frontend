import './Navigation.css'
import React from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {SignContext} from "../../contexts/SignContext";


function Navigation() {
    const logContext = React.useContext(SignContext)
    const {loggedIn} = logContext


    const [isBurgerOpen, setBurgerOpen] = React.useState(false)
    const {pathname} = useLocation()
    const whiteList = ['/profile', '/movies', '/saved-movies', '/']

    return (
        <>
            {pathname === '/' && !loggedIn && (
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
            {whiteList.some((i) => i === pathname) && loggedIn && (
                <>
                    <nav className="navigation navigation_hidden">
                        <NavLink
                            className='navigation__link-film' activeClassName='navigation__link-film_weight_semi-bold'
                            to='/movies'>
                            Фильмы
                        </NavLink>
                        <NavLink className='navigation__link-film' activeClassName='navigation__link-film_weight_semi-bold' to='/saved-movies'>
                            Сохранённые фильмы
                        </NavLink>
                        <Link className='navigation__link-profile link-profile' to='/profile'>
                            Аккаунт
                            <div className="profile-icon"/>
                        </Link>
                    </nav>
                    <button className="burger-button" type='button' onClick={() => setBurgerOpen(true)}/>
                    <nav className={`burger-navigation ${isBurgerOpen && 'burger-navigation_visible'}`}>
                        <ul className="burger__nav-list">
                            <li className="burger__nav-item">
                                <NavLink exact to='/' className='burger__nav-link' activeClassName='burger__nav-link_active'>
                                    Главная
                                </NavLink>
                            </li>

                            <li className="burger__nav-item">
                                <NavLink to='/movies' className='burger__nav-link' activeClassName='burger__nav-link_active'>
                                    Фильмы
                                </NavLink>
                            </li>

                            <li className="burger__nav-item">
                                <NavLink to='/saved-movies' className='burger__nav-link' activeClassName='burger__nav-link_active'>
                                    Сохранённые фильмы
                                </NavLink>
                            </li>

                            <li className="burger__nav-item">
                                <Link to='/profile' className='link-profile'>
                                    Аккаунт
                                    <div className="profile-icon"/>
                                </Link>
                            </li>
                        </ul>
                        <button className="burger__close-btn" type='button' onClick={() => setBurgerOpen(false)}/>
                    </nav>
                </>
            )}
        </>
    )
}

export default Navigation