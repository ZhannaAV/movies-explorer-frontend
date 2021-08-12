import React from "react";
import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mainApi from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";

function SavedMovies({isLoader, setIsLoader}) {
    const [savedMovies, setSavedMovies] = React.useState(null)
    const [findedMovies, setFindedMovies] = React.useState(null)
    const [filteredSavedMovies, setFilteredSavedMovies] = React.useState(null);
    const [resultSearchMessage, setResultSearchMessage] = React.useState('');

    React.useEffect(() => {
        mainApi.getSavedMovies()
            .then(res => {
                console.log(res)
                setSavedMovies(res)
            })
    }, [])

    function searchSavedMovies(phrase) {
        setIsLoader(true)
        setFindedMovies(savedMovies.filter(item => {
            return item.nameRU.includes(phrase)
        }))
    }

    React.useEffect(() => {
        setIsLoader(false)
    }, [filteredSavedMovies])


    function handleRemove(movie) {
        console.log(movie)
        setSavedMovies(savedMovies.filter(m => m._id !== movie._id))
    }

    return (
        <>
            <Header/>
            <section className='saved-movies'>
                <SearchForm search={searchSavedMovies}/>
                <FilterCheckbox title='Короткометражки' list={findedMovies}
                                setFilteredMovies={setFilteredSavedMovies}/>
                {isLoader ? <Preloader/> : (filteredSavedMovies &&
                    <MoviesCardList movies={filteredSavedMovies || []} message={resultSearchMessage}
                                    setMessage={setResultSearchMessage} handleRemove={handleRemove}/>)}
            </section>
            <Footer/>
        </>
    )
}

export default SavedMovies