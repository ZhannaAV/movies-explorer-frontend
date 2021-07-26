import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList ({isSaved, films}) {
    return (
        <div className='film'>
            <ul className='films__list'>
                {films.map(item =>{
                    return <MoviesCard key={item}/>
                })}
            </ul>
            <button className={`film__load-btn ${isSaved && "film__load-btn_hidden"}`}>Ещё</button>
        </div>
    )
}

export default MoviesCardList