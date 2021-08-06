import './MoviesCard.css'
import {moviesUrlImage} from "../../utils/constants";

function MoviesCard({isSaved, num, imageUrl, title}) {
    return (
        <li className="film__card">
            <img src={`${moviesUrlImage}${imageUrl}`} className="film__img" alt="обложка фильма"/>
            <div className="film__info">
                <h3 className="film__title">{title}</h3>
                <button className={isSaved ? "film__btn-like_remove" : `${num !== 3 ?'film__btn-like' : "film__btn-like film__btn-like_checked"}`}
                />
            </div>
            <p className="film__duration">1ч42м</p>
        </li>
    )
}

export default MoviesCard