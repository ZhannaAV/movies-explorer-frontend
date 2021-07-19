import './AboutMe.css'
import {Link} from 'react-router-dom'
import Title from "../Title/Title";
import Foto from "../../images/pic__COLOR_pic.jpg";

function AboutMe() {
    return (
        <section className="about-me">
            <Title title='Студент'/>
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
                        <Link className="about-me__link">Facebook</Link>
                        <Link className="about-me__link">Github</Link>
                    </ul>

                </div>
            </div>
        </section>


    )
}

export default AboutMe