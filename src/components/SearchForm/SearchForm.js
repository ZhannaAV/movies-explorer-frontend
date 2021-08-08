import React from "react";
import './SearchForm.css'
import {errorLoadMessage} from "../../utils/constants";

function SearchForm({search, setIsLoader, setResultSearchMessage}) {
    const [searchPhrase, setSearchPhrase] = React.useState('')

    function handleChange(e) {
        setSearchPhrase(e.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        setIsLoader(true)
        search(searchPhrase)
            .catch(error => {
                console.log(error)
                setResultSearchMessage(errorLoadMessage)
            })
            .finally(setIsLoader(false))
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