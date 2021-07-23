import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <div className='film'>
            <ul className='films__list'>
                {[...Array(16).keys()].map(item =>{
                    return <MoviesCard key={item}/>
                })}
            </ul>
            <button className="film__load-btn">Ещё</button>
        </div>

    )
}

export default MoviesCardList