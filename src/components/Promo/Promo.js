import './Promo.css'
import Globus from '../../images/text__COLOR_landing-logo.svg'
import {Link} from "react-router-dom";

function Promo() {
    return (
        <section className="promo">
            <img src={Globus} alt="глобус, выложенный словом web" className="promo__img"/>
            <div className="promo__info">
                <h1 className="promo__title">Учебный проект студента факультета <br/>Веб-разработки.
                </h1>
                <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его
                    создателя.</p>

                    <button className="promo__button">Узнать больше</button>

            </div>
        </section>
    )
}

export default Promo
