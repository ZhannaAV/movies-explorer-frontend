import React from "react";
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import {ERROR_LOAD_MESSAGE} from "../../utils/constants";

function Movies({allMovies}) {
    const [isLoader, setIsLoader] = React.useState(false);
    const [movies, setMovies] = React.useState(null)
    const [filteredMovies, setFilteredMovies] = React.useState(JSON.parse(localStorage.getItem('movies')));
    const [resultSearchMessage, setResultSearchMessage] = React.useState('');

    function searchMovies(phrase) {
        setIsLoader(true)
        const arr = allMovies.filter(item => {
            return item.nameRU.includes(phrase)
        })
        if (arr.length) {
            setMovies(arr)
        } else {
            setResultSearchMessage(ERROR_LOAD_MESSAGE)
        }
    }

    React.useEffect(() => {
        setIsLoader(false)
        localStorage.setItem('movies', JSON.stringify(filteredMovies))
    }, [filteredMovies])


    return (
        <>
            <Header/>
            <section className='movies'>
                <SearchForm search={searchMovies}/>
                <FilterCheckbox title='Короткометражки' list={movies} checkboxLocalStorageName="checkboxSavedMovie"
                                setFilteredMovies={setFilteredMovies}/>
                {isLoader ? <Preloader/> : (filteredMovies &&
                    <MoviesCardList movies={filteredMovies} message={resultSearchMessage}
                                    setMessage={setResultSearchMessage}/>)}
            </section>
            <Footer/>
        </>
    )
}

export default Movies