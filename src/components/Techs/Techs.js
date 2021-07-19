import './Techs.css'
import Title from "../Title/Title";

function Techs() {
    return (
        <section className="techs">
            <Title title='Технологии'/>
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые
                применили в дипломном проекте.</p>
            <ul className="techs__table">
                <li className="techs__item-block">
                    <p className="techs__item-text">HTML</p>
                </li>
                <li className="techs__item-block">
                    <p className="techs__item-text">CSS</p>
                </li>
                <li className="techs__item-block">
                    <p className="techs__item-text">JS</p>
                </li>
                <li className="techs__item-block">
                    <p className="techs__item-text">React</p>
                </li>
                <li className="techs__item-block">
                    <p className="techs__item-text">Git</p>
                </li>
                <li className="techs__item-block">
                    <p className="techs__item-text">Express.js</p>
                </li>
                <li className="techs__item-block">
                    <p className="techs__item-text">mongoDB</p>
                </li>
            </ul>
        </section>
    )
}

export default Techs