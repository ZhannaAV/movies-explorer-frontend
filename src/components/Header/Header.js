import './Header.css'
import {Link, useLocation} from 'react-router-dom'
import Logo from '../../images/logo.svg'
import Navigation from "../Navigation/Navigation";

function Header() {
    const {pathname} = useLocation()

    return (
        <header className={pathname === '/' ? 'header header_place_about-project' : 'header'}>
            <Link to='/'>
                <img className='header__logo' src={Logo} alt='логотип'/>
            </Link>
            <Navigation/>
        </header>
    )
}

export default Header