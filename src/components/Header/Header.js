import './Header.css'
import {Link, useLocation,} from 'react-router-dom'
import React from "react";
import Logo from '../../images/logo.svg'
import Navigation from "../Navigation/Navigation";

function Header() {
    const [headerStyle, setHeaderStyle] = React.useState('')
    const {pathname} = useLocation()
    const signList = ['/signin', '/signup']


    React.useEffect(() => {
        if (pathname === '/') setHeaderStyle('header_place_about-project')
        if (signList.some((i) => i === pathname)) setHeaderStyle('header_place_sign')
    },[pathname])


    return (
        <header className={`header ${headerStyle}`}>
            <Link to='/'>
                <img className='header__logo' src={Logo} alt='логотип'/>
            </Link>
            <Navigation/>
        </header>
    )
}

export default Header