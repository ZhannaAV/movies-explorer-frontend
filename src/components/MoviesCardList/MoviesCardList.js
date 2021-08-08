import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {emptySearchMessage} from "../../utils/constants";

function MoviesCardList({isSaved, movies, message, setMessage}) {

    React.useEffect(() => {
        if (!movies.length) setMessage(emptySearchMessage)
    }, [movies])

    return (
        <>
            {movies.length ? (
                <div className='film'>
                    <ul className='films__list'>
                        {movies.map(item => {
                            return <MoviesCard key={item.id} num={item.id} title={item.nameRU}
                                               imageUrl={item.image.url} isSaved={isSaved}/>
                        })}
                    </ul>
                    <button className={`film__load-btn ${isSaved && "film__load-btn_hidden"}`}>Ещё
                    </button>
                </div>
            ) : <p>{message}</p>
            }
        </>
    )
}

export default MoviesCardList