import {BACK_URL, MOVIES_URL_IMAGE} from "./constants";

class MainApi {
    constructor(backUrl, moviesUrlImage) {
        this._backUrl = backUrl;
        this._moviesUrlImage = moviesUrlImage;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }


//возвращает массив со всеми данными фильмов с сервера
    getSavedMovies() {
        return fetch(`${this._backUrl}/movies`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(this._checkResponse);
    }

// сохраняет фильм в БД сервера
    postMovie({
                  country,
                  director,
                  duration,
                  year,
                  description,
                  image,
                  trailerLink,
                  id,
                  nameRU,
                  nameEN
              }) {
        return fetch(`${this._backUrl}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: country,
                director: director,
                duration: duration,
                year: year,
                description: description,
                image: `${this._moviesUrlImage}${image.url}`,
                trailer: trailerLink,
                thumbnail: `${this._moviesUrlImage}${image.formats.thumbnail.url}`,
                movieId: id,
                nameRU: nameRU,
                nameEN: nameEN,
            })
        })
            .then(this._checkResponse)
    }

    //удаляет фильм
    deleteMovie(movieID) {
        return fetch(`${this._backUrl}/movies/${movieID}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(this._checkResponse)
    }

// добавляет юзера
    register = (name, email, password) => {
        return fetch(`${this._backUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "password": password,
                "email": email
            })
        })
            .then(this._checkResponse)
    }

// авторизация на странице signin
    authorize = (email, password) => {
        return fetch(`${this._backUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "password": password,
                "email": email
            })
        })
            .then(this._checkResponse)
    }

    //возвращает массив со всеми данными профиля с сервера
    getMe() {
        return fetch(`${this._backUrl}/users/me`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(this._checkResponse);
    }

    //меняет данные профайла на сервере и возвращает все данные профиля
    changeInfoProfile(name, email) {
        return fetch(`${this._backUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "email": email
            })
        })
            .then(this._checkResponse);
    }
}
    const mainApi = new MainApi(BACK_URL, MOVIES_URL_IMAGE);
    export default mainApi

