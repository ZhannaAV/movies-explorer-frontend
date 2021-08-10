import './MoviesCard.css'
import {moviesUrlImage} from "../../utils/constants";

function MoviesCard({isSaved, movie, toggleSaveMovies}) {

    function handleClickBtn() {
        toggleSaveMovies(movie)
    }

    return (
        <li className="film__card">
            <img src={`${moviesUrlImage}${movie.image.url}`} className="film__img"
                 alt="обложка фильма"/>
            <div className="film__info">
                <h3 className="film__title">{movie.nameRU}</h3>
                <button onClick={handleClickBtn}
                        className={`film__btn-like ${isSaved && "film__btn-like_checked"}`}
                />
            </div>
            <p className="film__duration">{Math.floor(movie.duration / 60) !== 0 && Math.floor(movie.duration / 60) + "ч"}{(movie.duration - Math.floor(movie.duration / 60) * 60) !== 0 && (movie.duration - Math.floor(movie.duration / 60) * 60) + "м"}</p>
        </li>
    )
}

export default MoviesCard

// "film__btn-like_remove"