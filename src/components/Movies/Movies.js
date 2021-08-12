import React from "react";
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import {ERROR_LOAD_MESSAGE} from "../../utils/constants";

function Movies({isLoader, setIsLoader}) {
    const [movies, setMovies] = React.useState(null)
    const [filteredMovies, setFilteredMovies] = React.useState(null);
    const [resultSearchMessage, setResultSearchMessage] = React.useState('');

    function searchMovies(phrase) {
        setIsLoader(true)
        return moviesApi.getMovies()
            .then(res => {
                setMovies(res.filter(item => {
                    return item.nameRU.includes(phrase)
                }))
            })
            .catch(error => {
                console.log(error)
                setResultSearchMessage(ERROR_LOAD_MESSAGE)
            })
    }

    React.useEffect(() => {
        setIsLoader(false)
    }, [filteredMovies])


    return (
        <>
            <Header/>
            <section className='movies'>
                <SearchForm search={searchMovies}/>
                <FilterCheckbox title='Короткометражки' list={movies}
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