import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(){
    return(
        <section className='movies'>
            <SearchForm/>
            <FilterCheckbox title='Короткометражки'/>
            <MoviesCardList/>
        </section>
    )
}
export default Movies