import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies() {
    return (
        <>
            <Header/>
            <section className='saved-movies'>
                <SearchForm/>
                <FilterCheckbox title='Короткометражки'/>
                <MoviesCardList isSaved={true} films={[...Array(3).keys()]}/>
            </section>
            <Footer/>
        </>
    )
}

export default SavedMovies