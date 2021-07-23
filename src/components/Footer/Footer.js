import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__copyright">&#169;2020</p>
                <ul className="footer__links">
                    <li className="footer__link-item">
                        <a href="https://praktikum.yandex.ru"
                           className="footer__link">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__link-item">
                        <a href="https://github.com" className="footer__link">Github</a>
                    </li>
                    <li className="footer__link-item">
                        <a href="https://ru-ru.facebook.com" className="footer__link">Facebook</a>
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer