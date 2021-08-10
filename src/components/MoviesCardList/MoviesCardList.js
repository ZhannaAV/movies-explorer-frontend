import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {emptySearchMessage} from "../../utils/constants";

function MoviesCardList({movies, message, setMessage, toggleSaveMovies}) {
    let [screenWidth, setScreenWidth] = React.useState(document.documentElement.clientWidth)
    const [pul, setPul] = React.useState([0, 0])
    const [currentElementNumber, setCurrentElementNumber] = React.useState(0)

    window.addEventListener('resize', resize)

    function resize() {
        setScreenWidth(document.documentElement.clientWidth)
    }

    // setTimeout(resize, 3000)

    React.useEffect(() => {
        if (screenWidth >= 1280) setPul([4, 3]);
        if (screenWidth >= 990 && screenWidth < 1280) setPul([3, 3]);
        if (screenWidth >= 630 && screenWidth < 990) setPul([2, 4]);
        if (screenWidth < 630) setPul([5, 1]);
    }, [screenWidth])

    React.useEffect(() => {
        if (!movies.length) setMessage(emptySearchMessage)
        setCurrentElementNumber(pul[0] * pul[1])
    }, [movies])

    React.useEffect(() => {
        setCurrentElementNumber(pul[0] * pul[1])
    }, [pul])

    function handlePushElements() {
        setCurrentElementNumber(currentElementNumber + pul[0])
    }

    return (
        <>
            {movies.length ? (
                <div className='film'>
                    <ul className='films__list'>
                        {movies.map((item, index) => {
                            if (index < Math.max(currentElementNumber, (pul[0] * pul[1]))) {
                                return <MoviesCard key={item.id} movie={item} isSaved={true}
                                                   toggleSaveMovies={toggleSaveMovies}/>
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