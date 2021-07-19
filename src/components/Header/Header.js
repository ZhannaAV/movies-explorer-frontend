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
                <Link to='signup'>
                    <button>Регистрация</button>
                </Link>
                <Link to='signin'>
                    <button>Войти</button>
                </Link>
            </div>
        </header>
    )
}

export default Header