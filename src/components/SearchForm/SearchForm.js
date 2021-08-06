import React from "react";
import './SearchForm.css'

function SearchForm({searchFilm}){
    return(
        <form className='search-form' onSubmit={searchFilm}>
            <input type="text" className="search-form__input" placeholder='Фильм'/>
            <button className='search-form__btn' type='submit'>
                Найти
            </button>
        </form>
    )
}

export default SearchForm