import './SearchForm.css'

function SearchForm(){
    return(
        <form className='search-form'>
            <input type="text" className="search-form__input" placeholder='Фильм' required/>
            <button className='search-form__btn' type='submit'>
                Найти
            </button>
        </form>
    )
}

export default SearchForm