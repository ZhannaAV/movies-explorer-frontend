import './AboutProject.css'
import NavTab from "../NavTab/NavTab";

function AboutProject() {
    return (
        <section id="about-project" className="about-project">
            <NavTab title='О проекте'/>
            <ul className="about-project__list">
                <li className="about-project__item">
                    <h3 className="about-project__item-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__item-text">Составление плана, работу над бэкендом,
                        вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="about-project__item">
                    <h3 className="about-project__item-title">На выполнение диплома ушло 5
                        недель</h3>
                    <p className="about-project__item-text">У каждого этапа был мягкий и жёсткий
                        дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="about-project__table">
                <div className="about-project__table-item">
                    <div className="about-project__block about-project__block_color_black">1 неделя</div>
                    <div className="about-project__capture">Back-end</div>
                </div>
                <div className="about-project__table-item">
                    <div className="about-project__block ">4 неделя</div>
                    <div className="about-project__capture">Front-end</div>
                </div>

            </div>

        </section>
    )
}

export default AboutProject