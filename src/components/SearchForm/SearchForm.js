import React from "react";
import './SearchForm.css'

function SearchForm({search}) {
    const [searchPhrase, setSearchPhrase] = React.useState('')

    function handleChange(e) {
        setSearchPhrase(e.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        search(searchPhrase)
        setSearchPhrase('')
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input type="text" className="search-form__input" placeholder='Фильм'
                   onChange={handleChange} value={searchPhrase}/>
            <button className='search-form__btn' type='submit'>
                Найти
            </button>
        </form>
    )
}

export default SearchForm