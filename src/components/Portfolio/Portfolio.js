import './Portfolio.css'
import Arrow from '../../images/arr_link-main.svg'

function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__projects-list">
                <li className="portfolio__project-item">
                        <h5 className="portfolio__project-title">Статичный сайт</h5>
                        <a href="https://github.com/ZhannaAV/how-to-learn" className="portfolio__project-link">
                            <img src={Arrow} alt="стрелка" className="portfolio__link-img"/>
                        </a>
                </li>
                <li className="portfolio__project-item">
                        <h5 className="portfolio__project-title">Адаптивный сайт</h5>
                        <a href="https://github.com/ZhannaAV/russian-travel" className="portfolio__project-link">
                            <img src={Arrow} alt="стрелка" className="portfolio__link-img"/>
                        </a>
                </li>
                <li className="portfolio__project-item">
                        <h5 className="portfolio__project-title">Одностраничное приложение</h5>
                        <a href="https://github.com/ZhannaAV/react-mesto-api-full" className="portfolio__project-link">
                            <img src={Arrow} alt="стрелка" className="portfolio__link-img"/>
                        </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio