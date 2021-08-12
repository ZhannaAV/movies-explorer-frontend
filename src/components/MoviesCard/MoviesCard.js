import React from "react";
import {useLocation} from "react-router-dom";
import './MoviesCard.css'
import {MOVIES_URL_IMAGE} from "../../utils/constants";
import mainApi from "../../utils/MainApi";

function MoviesCard({movie, handleRemove}) {
    const {pathname} = useLocation()
    const [savedID, setSavedID] = React.useState(movie._id || null)
    const [myMovies, setMyMovies] = React.useState([])

    // генерит массив сохраненных фильмов для определения состояния кнопки
    React.useEffect(() => {
        mainApi.getSavedMovies()
            .then(res => {
                setMyMovies(res)
            })
    }, [])


    React.useEffect(() => {
        if (pathname === '/movies') {
            const myMovie = myMovies.find(item => {
                return item.movieId === movie.id
            })
            if (myMovie) setSavedID(myMovie._id)
        }
        if (pathname === '/saved-movies') {
            setSavedID(movie._id)
        }
    }, [myMovies])

    React.useEffect(() => {
        if (pathname === '/movies') {
            const myMovie = myMovies.find(item => {
                return item.movieId === movie.id
            })
            if (myMovie) setSavedID(myMovie._id)
        }
        if (pathname === '/saved-movies') {
            setSavedID(movie._id)
        }
    }, [movie])


    function toggleLikeMovies() {
        console.log(movie)
        if (!savedID) {
            mainApi.postMovie(movie)
                .then(res => {
                    setSavedID(res._id)
                    setMyMovies([res, ...myMovies])
                })
                .catch(err => console.log(err))
        } else {
            mainApi.deleteMovie(savedID)
                .then(() => {
                    if (pathname === '/saved-movies') handleRemove(movie)
                    if (pathname === '/movies') handlRemoveMyMovie()
                    setSavedID(null)
                })
        }
    }

    function handlRemoveMyMovie() {
        setMyMovies(myMovies.filter(m => m._id !== savedID))
    }


    return (
        <>
            {(pathname === '/saved-movies' && !savedID) ? '' : (
                <li className="film__card">
                    <img
                        src={pathname === '/movies' ? `${MOVIES_URL_IMAGE}${movie.image.url}` : movie.image}
                        className="film__img"
                        alt="обложка фильма"/>
                    <div className="film__info">
                        <h3 className="film__title">{movie.nameRU}</h3>


                        {pathname === '/movies' && <button onClick={toggleLikeMovies}
                                                           className={`film__btn-like ${savedID && "film__btn-like_checked"}`}/>}

                        {pathname === '/saved-movies' &&
                        <button onClick={toggleLikeMovies} className="film__btn-like_remove"/>}


                    </div>
                    <p className="film__duration">{Math.floor(movie.duration / 60) !== 0 && Math.floor(movie.duration / 60) + "ч"}{(movie.duration - Math.floor(movie.duration / 60) * 60) !== 0 && (movie.duration - Math.floor(movie.duration / 60) * 60) + "м"}</p>
                </li>
            )}
        </>
    )
}

export default MoviesCard

