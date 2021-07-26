import './MoviesCard.css'
import Film from '../../images/film-img.jpg'

function MoviesCard() {
    return (
        <li className="film__card">
            <img src={Film} className="film__img"/>
            <div className="film__info">
                <h3 className="film__title">33 слова о дизайне</h3>
                <button className="film__btn-like film__btn-like_checked"/>
            </div>
            <p className="film__duration">1ч42м</p>
        </li>
    )
}

export default MoviesCard