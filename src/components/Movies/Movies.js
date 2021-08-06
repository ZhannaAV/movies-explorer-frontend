import React from "react";
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import {emptySearchMessage, errorLoadMessage} from "../../utils/constants";

function Movies() {
const [isLoader, setIsLoader] = React.useState(false);
const [checkboxShortFilmAll, setCheckboxShortFilmAll] = React.useState( false)
const [filteredMovies, setFilteredMovies] = React.useState(null);
const [resultSearchMessage, setResultSearchMessage] = React.useState('');
const [movies, setMovies] = React.useState([])
    // console.log(localStorage.getItem('moviesShort'))
    console.log(checkboxShortFilmAll)

    // React.useEffect(() => {
    //     if (localStorage.getItem('moviesShort')) setCheckboxShortFilmAll(localStorage.getItem('moviesShort'))
    // },[])


    console.log(filteredMovies)

    function searchAllFilm(evt){
        evt.preventDefault()
        setIsLoader(true)
        moviesApi.getMovies()
            .then(res => {
                setMovies(res)
                return res
            })
            .catch(error => {
                console.log(error)
                setResultSearchMessage(errorLoadMessage)
            })
            .finally(setIsLoader(false))
    }

    React.useEffect(() => {
        if (!filteredMovies) setResultSearchMessage(emptySearchMessage)
        console.log(filteredMovies)
    },[filteredMovies])

    return (
        <>
            <Header/>
            <section className='movies'>
                <SearchForm searchFilm={searchAllFilm}/>
                <FilterCheckbox title='Короткометражки' storageName="moviesShort" isFilterOn={checkboxShortFilmAll} setFilter={setCheckboxShortFilmAll} list={movies} setFilteredMovies={setFilteredMovies}/>
                {isLoader && <Preloader/>}
                {filteredMovies ? <MoviesCardList films={filteredMovies}/> : <p>{resultSearchMessage}</p>}
            </section>
            <Footer/>
        </>
    )
}

export default Movies