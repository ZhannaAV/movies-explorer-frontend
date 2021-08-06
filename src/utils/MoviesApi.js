import {moviesUrl} from "./constants";

class MoviesApi {
    constructor(moviesUrl) {
        this._moviesUrl = moviesUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

//возвращает массив со всеми фильмами
    getMovies() {
        return fetch(`${this._moviesUrl}`)
            .then(this._checkResponse);
    }
}

const moviesApi = new MoviesApi(moviesUrl);
export default moviesApi