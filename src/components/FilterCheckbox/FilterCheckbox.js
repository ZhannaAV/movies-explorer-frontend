import React from "react";
import './FilterCheckbox.css'
import {shortMovieLenght} from "../../utils/constants";

function FilterCheckbox({title, setFilteredMovies, list, checkboxLocalStorageName}) {
    const [isFilterOn, setFilter] = React.useState( JSON.parse(localStorage.getItem(`${checkboxLocalStorageName}`)))

    function applyFilter(list) {
        setFilteredMovies(list.filter(item => {
            return item.duration <= shortMovieLenght
        }))
    }

    function cancelFilter(list) {
        setFilteredMovies(list)
    }

// обрабатывает список при его измении и непустом значении
    React.useEffect(() => {
        if (list) {
            isFilterOn ? applyFilter(list) : cancelFilter(list)
        }
    }, [list])

// обрабатывает список при переключении чекбокса
    React.useEffect(() => {
        if(list) {
            isFilterOn ? applyFilter(list) : cancelFilter(list)
        }
        localStorage.setItem(`${checkboxLocalStorageName}`, JSON.stringify(isFilterOn))
    }, [isFilterOn])

    return (
        <fieldset className='filter-checkbox'>
            <input id='film' type='checkbox' className='filter-checkbox__input' checked={isFilterOn}
                   onChange={() => setFilter(!isFilterOn)}/>
            <label htmlFor='film' className='filter-checkbox__label'/>
            <p className='filter-checkbox__name'>{title}</p>
        </fieldset>)
}

export default FilterCheckbox