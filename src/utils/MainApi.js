import {baseUrl} from "./constants";

class MainApi {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

//возвращает массив со всеми данными профиля с сервера
    getInitialProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(this._checkResponse);
    }
}

const mainApi = new MainApi(baseUrl);
export default mainApi