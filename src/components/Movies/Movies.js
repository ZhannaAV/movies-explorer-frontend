import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies() {
    return (
        <>
            <Header/>
            <section className='movies'>
                <SearchForm/>
                <FilterCheckbox title='Короткометражки'/>
                <MoviesCardList films={[...Array(16).keys()]}/>
            </section>
            <Footer/>
        </>
    )
}

export default Movies