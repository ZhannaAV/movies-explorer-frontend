import {backUrl} from "./constants";

class MainApi {
    constructor(backUrl) {
        this._backUrl = backUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }


//возвращает массив со всеми данными фильмов с сервера
    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
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
                  trailer,
                  thumbnail,
                  movieId,
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
                image: image,
                trailer: trailer,
                thumbnail: thumbnail,
                movieId: movieId,
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
    const mainApi = new MainApi(backUrl);
    export default mainApi

