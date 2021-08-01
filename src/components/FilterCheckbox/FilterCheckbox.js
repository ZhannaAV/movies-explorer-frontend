import './FilterCheckbox.css'

function FilterCheckbox({title}){
    return(
        <fieldset className='filter-checkbox'>
            <input id='film' type='checkbox' className='filter-checkbox__input'/>
            <label htmlFor='film' className='filter-checkbox__label'/>
            <p className='filter-checkbox__name'>{title}</p>
        </fieldset>    )
}
export default FilterCheckbox