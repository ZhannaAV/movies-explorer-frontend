import './Navigation.css'
import React from "react";
import {Link, NavLink, useLocation} from "react-router-dom";

function Navigation() {
    const [isBurgerOpen, setBurgerOpen] = React.useState(false)
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
                <>
                    <nav className="navigation navigation_hidden">
                        <Link
                            className='navigation__link-film navigation__link-film_weight_semi-bold'
                            to='/signup'>
                            Фильмы
                        </Link>
                        <Link className='navigation__link-film' to='/signup'>
                            Сохранённые фильмы
                        </Link>
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