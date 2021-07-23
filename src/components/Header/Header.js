import './Header.css'
import {Link, useLocation} from 'react-router-dom'
import Logo from '../../images/logo.svg'

function Header() {
    const {pathname} = useLocation()

    return (
        <header className={pathname === '/' ? 'header header_place_about-project' : 'header'}>
            <Link to='/'>
                <img className='header__logo' src={Logo} alt='логотип'/>
            </Link>
            <div className="header__sign-block">
                <Link className='header__link-signup' to='/signup'>
                    Регистрация
                </Link>
                <Link className='header__link-signin' to='/signin'>
                    <button className="header__signin-btn">
                        Войти
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default Header