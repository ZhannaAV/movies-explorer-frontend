import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {EMPTY_SEARCH_MESSAGE, LARGE_DESKTOP_SCREEN_POINT, MEDIUM_DESKTOP_SCREEN_POINT, MOBILE_DESKTOP_SCREEN_POINT, EXTRA_LARGE_DESKTOP_TABLE, LARGE_DESKTOP_TABLE, MOBILE_DESKTOP_TABLE, MEDIUM_DESKTOP_TABLE} from "../../utils/constants";
import mainApi from "../../utils/MainApi";


function MoviesCardList({movies, handleRemove, message, setMessage}) {
    const [screenWidth, setScreenWidth] = React.useState(document.documentElement.clientWidth)
    const [pul, setPul] = React.useState([0, 0])
    const [currentElementNumber, setCurrentElementNumber] = React.useState(0)

    const [myMovies, setMyMovies] = React.useState([])

    window.addEventListener('resize', resize)

    function resize() {
        setScreenWidth(document.documentElement.clientWidth)
    }

    React.useEffect(() => {
        if (screenWidth >= LARGE_DESKTOP_SCREEN_POINT) setPul(EXTRA_LARGE_DESKTOP_TABLE);
        if (screenWidth >= MEDIUM_DESKTOP_SCREEN_POINT && screenWidth < LARGE_DESKTOP_SCREEN_POINT) setPul(LARGE_DESKTOP_TABLE);
        if (screenWidth >= MOBILE_DESKTOP_SCREEN_POINT && screenWidth < MEDIUM_DESKTOP_SCREEN_POINT) setPul(MEDIUM_DESKTOP_TABLE);
        if (screenWidth < MOBILE_DESKTOP_SCREEN_POINT) setPul(MOBILE_DESKTOP_TABLE);
    }, [screenWidth])

    React.useEffect(() => {
        if (!movies.length) setMessage(EMPTY_SEARCH_MESSAGE)
        setCurrentElementNumber(pul[0] * pul[1])
    }, [movies])

    React.useEffect(() => {
        setCurrentElementNumber(pul[0] * pul[1])
    }, [pul])

    function handlePushElements() {
        setCurrentElementNumber(currentElementNumber + pul[0])
    }

    // генерит массив сохраненных фильмов для определения состояния кнопки
    React.useEffect(() => {
        mainApi.getSavedMovies()
            .then(res => {
                setMyMovies(res)
            })
    }, [])

    return (
        <>
            {movies.length ? (
                <div className='film'>
                    <ul className='films__list'>
                        {movies.map((item, index) => {
                            if (index < Math.max(currentElementNumber, (pul[0] * pul[1]))) {
                                return <MoviesCard key={item.id || item._id} movie={item} myMovies={myMovies} setMyMovies={setMyMovies} handleRemove={handleRemove}/>
                            }
                        })}
                    </ul>
                    {movies[currentElementNumber] &&
                    <button className="film__load-btn" onClick={handlePushElements}>Ещё</button>}
                </div>
            ) : <p>{message}</p>
            }
        </>
    )
}

export default MoviesCardList