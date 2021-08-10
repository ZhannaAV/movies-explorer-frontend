import React from "react";
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";

function Movies({isLoader, setIsLoader}) {
    const [filteredMovies, setFilteredMovies] = React.useState(null);
    const [resultSearchMessage, setResultSearchMessage] = React.useState('');
    const [movies, setMovies] = React.useState(null)
    // console.log(localStorage.getItem('moviesShort'))


    // React.useEffect(() => {
    //     if (localStorage.getItem('moviesShort')) setCheckboxShortFilmAll(localStorage.getItem('moviesShort'))
    // },[])

    function searchMovies(phrase) {
        return moviesApi.getMovies()
            .then(res => {
                setMovies(res.filter(item => {
                    return item.nameRU.includes(phrase)
                }))
            })
    }

    function toggleLikeMovies(movie) {
        console.log(movie)
    }

    return (
        <>
            <Header/>
            <section className='movies'>
                <SearchForm search={searchMovies} setIsLoader={setIsLoader}
                            setResultSearchMessage={setResultSearchMessage}/>
                <FilterCheckbox title='Короткометражки' storageName="moviesShort" list={movies}
                                setFilteredMovies={setFilteredMovies}/>
                {isLoader ? <Preloader/> : (filteredMovies &&
                    <MoviesCardList movies={filteredMovies} message={resultSearchMessage}
                                    setMessage={setResultSearchMessage}
                                    toggleSaveMovies={toggleLikeMovies}/>)}
            </section>
            <Footer/>
        </>
    )
}

export default Movies