import React from "react";
import './FilterCheckbox.css'

function FilterCheckbox({title, setFilteredMovies, list}) {
    const [isFilterOn, setFilter] = React.useState( false)

    function applyFilter(list) {
        setFilteredMovies(list.filter(item => {
            return item.duration <= 40
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
        isFilterOn ? applyFilter(list) : cancelFilter(list)
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