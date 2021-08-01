import './AboutMe.css'
import Foto from "../../images/pic__COLOR_pic.jpg";
import NavTab from "../NavTab/NavTab";

function AboutMe() {
    return (
        <section className="about-me">
            <NavTab title='Студент'/>
            <div className="about-me__info-block">
                <img src={Foto} alt="фото" className="about-me__img"/>
                <div className="about-me__info">
                    <h3 className="about-me__title">Виталий</h3>
                    <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__description">Я родился и живу в Саратове, закончил
                        факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
                        веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной
                        работы.</p>
                    <ul className="about-me__links">
                        <a href='https://ru-ru.facebook.com/' target='_blank' rel="noreferrer"
                           className="about-me__link">Facebook</a>
                        <a href='https://github.com' className="about-me__link">Github</a>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AboutMe